import '../less/ComponentBar.less';
import ComponentBaseFactory from './ComponentBase.js';

let ComponentBarFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    Component.addClass('ComponentBar');
    let data = config.data;
    data.forEach((ele, index)=>{
        let row = $('<div class="row"></div>');
        let name = $('<div class="name"/>');
        name.text(ele[0]);
        let load = $('<div class="load"/>');
        load.css({'width': ele[1]*200});
        let loadInner = $('<div class="loadInner"/>');
        loadInner.css('background', ele[2]);
        loadInner.appendTo(load);
        let per = $('<div class="per"/>');
        per.text(ele[1]*100 + '%');
        row
            .append(name)
            .append(load)
            .append(per)
            .appendTo(Component);
    });
    return Component;
};
export default ComponentBarFactory;