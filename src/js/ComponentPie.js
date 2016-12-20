import '../less/ComponentPie.less';
import ComponentBaeFactory from  './ComponentBase.js';

let ComponentPieFactory = (config) => {
    let Component = ComponentBaeFactory(config);
    Component.addClass('ComponentPie');
    let [w, h] = [config.width, config.height];
    let oBgCvs = $('<canvas></canvas>').get(0);
    [oBgCvs.width, oBgCvs.height] = [w, h];
    Component.append(oBgCvs);
    let ctx = oBgCvs.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#eee';
    let r = w / 2;
    ctx.arc(r, r, r, 0, 2 * Math.PI);
    ctx.fill();

    let data = config.data;
    let sAngle = Math.PI * 1.5;
    let eAngle = 0;
    let aAngle = Math.PI * 2;
    data.forEach( (ele, index) => {

        //把数据平均分成几个等分
        //终止角度 = 起始角度 + 比例　× 满角度
        eAngle = sAngle + ele[1] * aAngle;
        ctx.beginPath();
        ctx.fillStyle = ele[2];
        ctx.moveTo(r, r);
        ctx.arc(r, r, r, sAngle, eAngle);
        ctx.fill();


        //在数据上添加数字;
        var oText = $('<div class="text"/>');
        oText.text(ele[0]);
        oText.css('position', 'absolute');
        let oTextR = w / 2 /2;//实际宽度的一半;
        let x = Math.abs(oTextR * Math.cos(sAngle + (eAngle - sAngle)  /2 ));
        let y = Math.abs(oTextR * Math.sin(sAngle + (eAngle - sAngle) / 2));

        let trueAngle = sAngle + (eAngle - sAngle)  /2;
        if ( trueAngle >= 1.5 * Math.PI && trueAngle < 2.5 * Math.PI) {
            oText.css('left', oTextR + x);
        }else {
            oText.css('right', oTextR + x);
        }
        if ( trueAngle >= 2 * Math.PI && trueAngle <= 3 * Math.PI) {
            oText.css('top', oTextR + y);
        }else {
            oText.css('bottom', oTextR + y);
        }
        Component.append(oText);
        
        sAngle = eAngle;
    })


    let oMaskCvs = $('<canvas></canvas>').get(0);
    [oMaskCvs.width, oMaskCvs.height] = [w, h];
    ctx = oMaskCvs.getContext('2d');
    sAngle = 1.5 * Math.PI;
    Component.append(oMaskCvs);
    function draw(per) {
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.fillStyle = 'deeppink';
        ctx.moveTo(r, r);
        ctx.arc(r, r, r, sAngle, sAngle - aAngle * per , 1);
        ctx.fill();
    }
    Component.on('cpLoad', () => {
        draw(1);
        setTimeout(()=> {
            let s = 1;
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    s -= 0.01;
                    draw(s);
                }, 10 * i);
            }
        }, config.delay + 200);
    })

    return Component;
}

export default ComponentPieFactory;