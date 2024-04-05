const createEl = (function(document){
    let api = {
        element: function (name, attributes) {
            var el = document.createElement(name);

            if (attributes) {
                for (let key in attributes) {
                    if (attributes.hasOwnProperty(key)) {
                        el.setAttribute(key, attributes[key]);
                    }
                }
            }
            return el
        },

        div: function (attributes) {
            return api.element('div', attributes)
        }
    }

    return api

    // USAGE:
    // var div = createEl.div({ 'class': 'hero' });
    // var para = createEl.element('p', { 'class': 'para' });   
}(window.document));

export default createEl;
