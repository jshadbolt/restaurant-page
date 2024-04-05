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















// const footer = createEl.div({'class' : 'footer'});
// const contacts = createEl.element('ul', {'class' : 'contacts'})
// const phone = createEl.element('li', {'class' : 'info'})
// phone.textContent = '02 3029 1785'
// const email = createEl.element('li', {'class' : 'info'})
// email.textContent = 'bakery@bordeaux.co.nz'
// const address = createEl.element('li', {'class' : 'info'})
// address.textContent = '79 Thereux Way, Marseilles Quarter'
// contacts.appendChild(phone)
// contacts.appendChild(email)
// contacts.appendChild(address)
// footer.appendChild(contacts)