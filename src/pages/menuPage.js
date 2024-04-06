import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'

import menuData from '../data/menuData.js'
import styleSelected from '../utility/styleSelected.js'





function menuPage(target) {

    let guide = createEl.div({'class' : 'guide'})
        let guideTitle  = createEl.div({'class' : 'guide-title'})
        guideTitle.textContent = `Allergens`
        guide.appendChild(guideTitle)

        let guideText =  createEl.div({'class' : 'guide-text'})
        guideText.textContent = 'GF ~ Gluten free  |  DF ~ Dairy free'
        guide.appendChild(guideText)
    target.appendChild(guide)


    
    let sectionTitle = createEl.div({'class' : 'section-title'})
    sectionTitle.textContent = 'Sweet Items'
    target.appendChild(sectionTitle)
    
    let menuWrapper = createEl.div({'class' : 'menu-wrapper'})

    function handleExpandBtn(btn) {
        if (btn.classList.contains('expandedBtn')) {
            btn.classList.remove('expandedBtn')
            btn.parentElement.querySelector('img').classList.remove('expandedImg')
            btn.parentElement.classList.remove('item-selected')
        } else {
            styleSelected(btn, menuWrapper, 'button', 'expandedBtn')
            styleSelected(btn.parentElement.querySelector('img'), menuWrapper, 'img', 'expandedImg')
            styleSelected(btn.parentElement, menuWrapper, 'div', 'item-selected')
        }
    }

    function collapseAll() {
        let btns = menuWrapper.querySelectorAll('button')
        btns.forEach(btn => {
            btn.classList.remove('expandedBtn')
            btn.textContent = ''
        })

        let images = menuWrapper.querySelectorAll('img')        
        images.forEach(image => image.classList.remove('expandedImg'))

        let items = menuWrapper.querySelectorAll('.item-wrapper')
        items.forEach(item => item.classList.remove('item-selected'))
        
    }

    menuWrapper.addEventListener('click', e => {
        const button = e.target.closest('button');
        if (button == null) {
            collapseAll()
            console.log('clicked outside')
            return
        }
        handleExpandBtn(button)
    })


    for (let entry in menuData) {

        let currentItem = menuData[entry]
        
        let itemWrapper = createEl.div({'class' : 'item-wrapper'})

        let expandBtn = createEl.element('button', {'class' : 'expand-button'})
        itemWrapper.appendChild(expandBtn)

        let photo = new Image()
        photo.src = currentItem.image
        photo.classList.add('item-photo')
        itemWrapper.appendChild(photo)

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

    // make first item open on load
    let firstBtn = menuWrapper.querySelector('button')
    handleExpandBtn(firstBtn)

    attachEl(menuWrapper, target, 'append')
}


// MENU GENERATOR
export default menuPage;