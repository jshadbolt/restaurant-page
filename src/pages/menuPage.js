import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'

import menuData from '../data/menuData.js'


function menuPage(target) {

    let menuWrapper = createEl.div({'class' : 'menu-wrapper'})
    

    for (let entry in menuData) {

        let currentItem = menuData[entry]

        let itemWrapper = createEl.div({'class' : 'item-wrapper'})

        let title = createEl.div({'class' : 'item-title'})
            title.textContent = entry
        itemWrapper.appendChild(title)

        let description = createEl.div({'class' : 'item-description'})
            description.textContent = currentItem.description
        itemWrapper.appendChild(description)


        let infoWrapper = createEl.div({'class' : 'info-wrapper'})
            let price = createEl.div({'class' : 'price'})
            price.textContent = currentItem.price
            infoWrapper.appendChild(price)
            let gf = createEl.div({'class' : 'gf'})
            gf.textContent = (function() {
                return currentItem.glutenFree === true ? 'Yes' : 'No'
            })()
            infoWrapper.appendChild(gf)
        itemWrapper.appendChild(infoWrapper)



    
        attachEl(itemWrapper, menuWrapper, 'append')

    }

    attachEl(menuWrapper, target, 'append')

}



export default menuPage;