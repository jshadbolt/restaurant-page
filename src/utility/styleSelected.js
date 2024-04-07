let styleSelected = function(target, parent, childType, style, ignore) {


    let childrens = parent.querySelectorAll(childType)
    
    // use true for parameter 'ignore' to allow multiple menu items expanded same time

    if (ignore) {
        target.classList.add(style)
    } else {

        for (let child of childrens) {
            if (child === target) {
                child.classList.add(style)
            } else {
                child.classList.remove(style)
            }
        }

    }


}


export default styleSelected;