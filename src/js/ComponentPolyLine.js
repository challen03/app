import '../less/Componentpolyline.less';
import ComponentBaseFactory from './ComponentBase.js';

let ComponentPolylineFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPolyLine');
    let oCanvas = $('<canvas/>').get(0);//转成原生;
    let ctx = oCanvas.getContext('2d');
    oCanvas.width = config.width;//这是两倍的宽度;在CSS里缩小一半就能达到不失贞的效果;
    oCanvas.height = config.height;
    Component.append(oCanvas);

    //画水平线
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
    let step = 10;
    let oCanvasW = config.width;
    let oCanvasH = config.height;
    let data = config.data;
    let colW = config.width / (data.length + 1);//列宽
    //十个格画是十一线
    for (let i = 0; i < step + 1; i++) {
        var y = (oCanvasH / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(oCanvasW, y);
    }
    ctx.stroke();
    //垂直线

    for (let i = 0,len = data.length; i < len + 2; i++) {
        let x = (oCanvasW / (len + 1)) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, oCanvasH);  
    }
    ctx.stroke();


    //加上数据信息
    let textW = colW / 2;//画的是真实的所以除2
    data.forEach((ele, index) => {
        let x = textW * (index + 1);
        let oText = $('<div class="text"></div>');
        oText.text(ele[0]);
        oText.css({'left': x - textW / 2, 'width': textW, position: 'absolute', textAlign: 'center', bottom: '-20px'});
        Component.append(oText);
    })


    //问：为什么canvas没有错位或前一个覆盖下后面的
    //答：canvas给了样式positin:absolute;width: 100%;height: 100%;而且canvas是透明的,即是上面的canvas能看到下面的canvas

    //根据数据画点;
    let oCanvasTop = $("<canvas></canvas>").get(0);
    let ctxTop =  oCanvasTop.getContext('2d');
    //问： oCanvas.width = config.width;
    // oCanvas.height = config.height;
    //答:canvas画布，当改变画布的长度或者宽度时，画布的内容会消失
    oCanvasTop.width = config.width;
    oCanvasTop.height = config.height;
    Component.append(oCanvasTop);
    
    function draw (per) { 
        ctxTop.clearRect(0, 0, config.width, config.height);
        ctxTop.beginPath();           
        //画点
        data.forEach((ele, index) => {
            let x = colW * (index + 1);
            let y = config.height * (1 - ele[1] * per);
            ctxTop.moveTo(x, y);
            ctxTop.arc(x, y, 5, 0, Math.PI*2);
        })
        ctxTop.stroke();

        //连线
        ctxTop.moveTo(colW, config.height);
        data.forEach( (ele, index) => {
            let x  = colW * (index + 1);
            let y = config.height * (1 - ele[1] * per);
            ctxTop.lineTo(x, y);
            if (index == data.length - 1) {
                ctxTop.stroke();
                ctxTop.lineTo(colW * data.length, config.height);
                ctxTop.closePath();
                ctxTop.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctxTop.fill();
            }
        })

        //写文本
        data.forEach( (ele, index) => {
            let x = colW * (index + 1);
            let y = config.height * (1 - ele[1] * per); 
            ctxTop.moveTo(x, y);
            ctxTop.font = '35px Arial';
            ctxTop.fillStyle = ele[2];
            ctxTop.fillText(ele[1] * 100 + '%', x - 18 , y - 18);
        });
    }


    Component.on('cpLoad', () => {
        let s = 0;
        for (let i = 0; i < 100; i ++) {
            setTimeout( () => {
            s += 0.01;
            draw(s);
            }, 10 * i);
            //越来愈慢
        }

    });

    Component.on('cpLeave', () => {
        let s = 1;
        for (let i = 0; i < 100; i++) {
            setTimeout( () => {
                s -= 0.01;
                draw(s);
            }, 10 * i);
        }
    })

    return Component;
};
export default ComponentPolylineFactory;