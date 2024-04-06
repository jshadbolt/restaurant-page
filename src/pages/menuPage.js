import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'

import menuData from '../data/menuData.js'
import styleSelected from '../utility/styleSelected.js'





function menuPage(target) {


    let menuWrapper = createEl.div({'class' : 'menu-wrapper'})


    function handleExpandBtn(btn) {
        if (btn.classList.contains('expandedBtn')) {
            btn.classList.remove('expandedBtn')
            btn.parentElement.querySelector('img').classList.remove('expandedImg')
        } else {
            styleSelected(btn, menuWrapper, 'button', 'expandedBtn')
            styleSelected(btn.parentElement.querySelector('img'), menuWrapper, 'img', 'expandedImg')
            btn.textContent = btn.textContent === 'More' ? 'Less' : 'More'
        }
    }

    menuWrapper.addEventListener('click', e => {
        const button = e.target.closest('button');
        handleExpandBtn(button)
    })


    for (let entry in menuData) {

        let currentItem = menuData[entry]
        
        let itemWrapper = createEl.div({'class' : 'item-wrapper'})

        let photo = new Image()
            photo.src = currentItem.image
            photo.classList.add('item-photo')
        itemWrapper.appendChild(photo)

        let expandBtn = createEl.element('button', {'class' : 'expand-button'})
        expandBtn.textContent = 'More'
        itemWrapper.appendChild(expandBtn)

        let textContent = createEl.div({'class' : 'itemTextContent'})

        let title = createEl.div({'class' : 'item-title'})
            title.textContent = entry
        textContent.appendChild(title)

        let description = createEl.div({'class' : 'item-description'})
            description.textContent = currentItem.description
        textContent.appendChild(description)

        let infoWrapper = createEl.div({'class' : 'info-wrapper'})
            let price = createEl.div({'class' : 'price'})
                price.textContent = currentItem.price
            infoWrapper.appendChild(price)

            let gf = createEl.div({'class' : 'gf'})
                gf.textContent = (function() {
                    return currentItem.glutenFree === true ? 'GF' : ''
                })()
            infoWrapper.appendChild(gf)

            let df = createEl.div({'class' : 'df'})
            df.textContent = (function() {
                return currentItem.dairyFree === true ? 'DF' : ''
            })()
            infoWrapper.appendChild(df)
        textContent.appendChild(infoWrapper)


        attachEl(textContent, itemWrapper, 'append')

        attachEl(itemWrapper, menuWrapper, 'append')

    }


    attachEl(menuWrapper, target, 'append')
}


// MENU GENERATOR
export default menuPage;