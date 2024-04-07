import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'
import pic from '../img/hero.jpg'

const lorem = "Consectetur adipisicing elit. Sequi quos odio error quasi omnis dignissimos maxime ipsa mollitia reiciendis accusamus. Lorem cumque ea facere debitis molestias rerum cum numquam esse architecto magni adipisci."

function homePage(target) {

    let homeWrapper = createEl.div({'class' : 'home-wrapper'})

    let title = createEl.div({'class' : 'title'})
    title.textContent = 'Bakery Bordeaux'

    const hero = createEl.div({'class' : 'hero'})
    // const heroImg = new Image()
    // heroImg.src = pic

    // hero.appendChild(heroImg)

    


    function createHomeSection1() {
        let homeTextWrap = createEl.div({'class' : 'home-text-wrap'})
    
        let title = createEl.div({'class' : 'home-title'})
        title.textContent = `The timeless elegance of French pastry artistry.`
    
        let description1 = createEl.element('p', {'class' : 'home-description'})
        description1.textContent = lorem

        let description2 = createEl.element('p', {'class' : 'home-description'})
        description2.textContent = lorem.slice(0, lorem.length / 2) + ' ' + lorem
    
        homeTextWrap.appendChild(title)
        homeTextWrap.appendChild(description1)
        homeTextWrap.appendChild(description2)

        homeWrapper.appendChild(homeTextWrap)
    }


    attachEl(title, homeWrapper, 'append')
    attachEl(hero, homeWrapper, 'append')
    createHomeSection1()

    attachEl(homeWrapper, target, 'append')




    let footer = createEl.div({'class' : 'home-footer'})
    let copyright = createEl.div({'id' : 'copyright'})

    footer.appendChild(copyright)
    homeWrapper.appendChild(footer)

}

export default homePage;

