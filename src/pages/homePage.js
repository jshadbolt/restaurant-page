import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'
import pic from '../img/hero.jpg'

const lorem = "Consectetur adipisicing elit. Sequi quos odio error quasi omnis dignissimos maxime ipsa mollitia reiciendis accusamus. Lorem cumque ea facere debitis molestias rerum cum numquam esse architecto magni adipisci."

function homePage(target) {

    let title = createEl.div({'class' : 'title'})
    title.textContent = 'Bakery Bordeaux'

    const hero = createEl.div({'class' : 'hero'})
    const heroImg = new Image()
    heroImg.src = pic

    hero.appendChild(heroImg)

    const paraWrap = createEl.element('div', {'class' : 'para-wrap'})
    const para = createEl.element('p', {'class' : 'para'})
    para.textContent = lorem
    paraWrap.appendChild(para)
    
    attachEl(title, target, 'append')
    attachEl(hero, target, 'append')
    attachEl(paraWrap, target, 'append')


}

export default homePage;

