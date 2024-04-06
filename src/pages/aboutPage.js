import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'


function aboutPage(target) {
    let test = createEl.div({'class' : 'testing'})
    test.textContent = 'about page'
    attachEl(test, target, 'append')
}

export default aboutPage;






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