import './jqUI.js';
import './jqFP.js';

import ManageObj from './ManagePageComponent.js';


ManageObj
        .init('wrapper')
            .addPage('index')
                .addComponent({
                    name: 'shake',
                    width: 500,
                    height: 50,
                    text: '陈冠潮',
                    center: true,
                    css: {
                        position: 'absolute',
                        top: 0,
                        opacity: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'orange'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 150
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 600
                })
                .addComponent({
                    width: 346,
                    height: 494,
                    css: {
                        position: 'absolute',
                        bottom: -10,
                        left: -20,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/left.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        left: 0,
                        bottom: 0
                    },
                    animateOut: {
                        opacity: 0,
                        left: -20,
                        bottom: -10,
                    },
                    delay: 1200
                })
                .addComponent({
                    width: 324,
                    height: 450,
                    css: {
                        position: 'absolute',
                        right: -20,
                        bottom: -10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/right.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        right: 0,
                        bottom: 0,
                    },
                    animateOut: {
                        right: -20,
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 1600
                })
/*-------------------------------------------------------------------------*/

            .addPage()
                .addComponent({
                    width: 500,
                    height: 124,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/标题背景.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })
                .addComponent({
                    width: 522,
                    height: 336,
                    text: '本人从小热爱数学，有较强的逻辑思路，在大一时的计算机基础课上表现出浓厚的兴趣，试图弄懂计算机和互联网原理，并在业余时间里通过互联网自学了计算机有关的课',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/dialog.png)',
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000
                })
                .addComponent({
                    width: 516,
                    height: 306,
                    center: true,
                    css: {
                        position: 'absolute',
                        bottom: -10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/people.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        right: 0,
                        bottom: 20,
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 1400
                })         
            .addPage()
                .addComponent({
                    width: 500,
                    height: 124,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/标题背景.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 516,
                    height: 306,
                    center: true,
                    text: '能力柱状图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Bar',
                    width: 500,
                    height: 300,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 200
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.7, 'pink'],
                        ['h5', 0.5, 'yellow'],
                        ['css3', 0.7, 'red'],
                        ['jQ', 0.5, 'orange'],
                        ['react', 0.4, 'gray']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    width: 500,
                    height: 126,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/标题背景.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 500,
                    height: 306,
                    center: true,
                    text: '能力折线图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Poly',
                    width: 500,
                    height: 500,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 100
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.8, 'pink'],
                        ['h5', 0.5, 'yellow'],
                        ['css3', 0.7, 'red'],
                        ['jQ', 0.5, 'orange'],
                        ['react', 0.4, 'gray']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    width: 500,
                    height: 126,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/标题背景.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 500,
                    height: 306,
                    center: true,
                    text: '能力饼图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Pie',
                    width: 500,
                    height: 500,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 100
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.3, 'pink'],
                        ['css', 0.3, 'yellow'],
                        ['css3', 0.2, 'red'],
                        ['jQ', 0.1, 'orange'],
                        ['react', 0.1, 'gray']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    name: 'back',
                    width: 48,
                    height: 26,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/back.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 30
                    },
                    animateOut: {                
                        opacity: 0,
                        top: 0
                    },
                    event: {
                        click: () => {
                            ManageObj.oContainer.fullpage.moveTo(1);
                        }               
                    },
                    delay: 200
                })
                .addComponent({
                    width: 128,
                    height: 120,
                    css: {
                        position: 'absolute',
                        top: 100,
                        right: 50,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/share.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 0,
                        right: 0
                    },
                    animateOut: {
                        opacity: 0,
                        top: 100,
                        right: 0
                    },
                    delay: 600
                })
                .addComponent({
                    width: 500,
                    height: 50,
                    text: '希望能进入贵公司, 感谢你的观看,想了解更多可以咨询页眉e-mail',
                    center: true,
                    css: {
                        position: 'absolute',
                        top: 0,
                        opacity: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'orange'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 150
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 600
                })

        .load();









