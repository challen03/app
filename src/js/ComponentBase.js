import '../less/ComponentBase.less';
let ComponentBaseFactory = (config) => {
    let Component = $('<div class="ComponentBase"/>');
    let Id = (Math.random() + '').replace('.', '_');
    Component.attr('id', Id);
    // 更具config 定制化你的组件
    config.width && Component.css('width', config.width / 2);
    config.height && Component.css('height', config.height / 2);
    config.text && Component.text(config.text);
    config.center && Component.css({left: '50%', marginLeft: -(config.width / 2 / 2)});
    config.css && Component.css(config.css);
    config.name && Component.addClass(config.name);
    for (var eventType in config.event) {
        Component.on(eventType, config.event[eventType]);
    }
    Component.on('cpLeave', (e) => {
        setTimeout( () => {
            Component.removeClass('loadComponent');
            Component.addClass('leaveComponent');
            config.animateOut && Component.animate( config.animateOut );
        }, config.delay || 200);
    });
    Component.on('cpLoad', (e) => {
        setTimeout( () => {
            Component.removeClass('leaveComponent');
            Component.addClass('loadComponent');
            config.animateIn && Component.animate( config.animateIn );
        }, config.delay ||200);   
    });
    return Component;
};
export default ComponentBaseFactory;


