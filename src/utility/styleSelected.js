let styleSelected = function(target, parent, childType, style) {


    let childrens = parent.querySelectorAll(childType)


    for (let child of childrens) {
        if (child === target) {
            child.classList.add(style)
        } else {
            child.classList.remove(style)
        }
    }

}


export default styleSelected;