import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'
import contactData from '../data/contactData.js'

import img1 from '../img/about/1.jpg'
import img2 from '../img/about/2.jpg'
import img3 from '../img/about/3.jpg'


function aboutPage(target) {

    let aboutPageWrapper = createEl.div({'class' : 'about-page-wrapper'})


    let about = createEl.div({'class' : 'about-wrapper'})
    let title = createEl.div({'class' : 'about-title'})
    title.textContent = contactData.about.title
    let description = createEl.div({'class' : 'about-description'})
    description.textContent = contactData.about.description

    about.appendChild(title)
    about.appendChild(description)
    aboutPageWrapper.appendChild(about)


    let photo1 = new Image()
    photo1.src = img2
    photo1.classList.add('about-photo')
    aboutPageWrapper.appendChild(photo1)


    let contacts = createEl.element('ul', {'class' : 'contacts'})
    let phone = createEl.element('li', {'id' : 'phone'})
    phone.textContent = contactData.phone
    let email = createEl.element('li', {'id' : 'email'})
    email.textContent = contactData.email
    let address = createEl.element('li', {'id' : 'address'})
    address.textContent = contactData.address

    contacts.appendChild(phone)
    contacts.appendChild(email)
    contacts.appendChild(address)
    aboutPageWrapper.appendChild(contacts)    


    target.appendChild(aboutPageWrapper)

    let footer = createEl.div({'class' : 'about-footer'})
    let copyright = createEl.div({'id' : 'copyright'})
    copyright.textContent = 'Website by J Shadbolt'

    footer.appendChild(copyright)
    target.appendChild(footer)


    // add some about the team
    // add more images, spanning whole length of website
}

export default aboutPage;