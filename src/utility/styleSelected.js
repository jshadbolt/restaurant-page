let styleSelected = function(target, style) {

    let group = target.parentNode.children

    for (let child of group) {
        if (child === target) {
            child.classList.add(style)
        } else {
            child.classList.remove(style)
        }
    }

}

export default styleSelected;