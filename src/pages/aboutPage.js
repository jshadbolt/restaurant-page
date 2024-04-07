import createEl from '../utility/createEl.js'
// import attachEl from '../utility/attachEl.js'
import contactData from '../data/contactData.js'

import img1 from '../img/about/1.jpg'
import img2 from '../img/about/2.jpg'
import img3 from '../img/about/3.jpg'


function aboutPage(target) {



    let aboutPageWrapper = createEl.div({'class' : 'about-page-wrapper'})



    // let about = createEl.div({'class' : 'about-wrapper'})

    function createSection1() {
        let textPhotoWrapper = createEl.div({'class' : 'text-photo-wrapper'})
        let textContent = createEl.div({'class' : 'text-photo-wrapper-textContent'})
    
    
        let title = createEl.div({'class' : 'about-title'})
        title.textContent = contactData.about.title
    
        let description = createEl.div({'class' : 'about-description'})
        description.textContent = contactData.about.description1
    
        let aboutPhoto = createEl.element('img', {'class' : 'about-photo'})
        aboutPhoto.src = img2
    
        textContent.appendChild(title)
        textContent.appendChild(description)
    
        textPhotoWrapper.appendChild(textContent)
        textPhotoWrapper.appendChild(aboutPhoto)
    
        // aboutPageWrapper.appendChild(about)
        aboutPageWrapper.appendChild(textPhotoWrapper)
    }

    function createSection2() {
        let textPhotoWrapper = createEl.div({'class' : 'text-photo-wrapper'})
        let textContent = createEl.div({'class' : 'text-photo-wrapper-textContent'})
    
    
        let title = createEl.div({'class' : 'about-title'})
        title.textContent = 'Our mission'
        title.id = 'mission-title'
    
        let description = createEl.div({'class' : 'about-description'})
        description.textContent = contactData.about.description2
    
        let aboutPhoto = createEl.element('img', {'class' : 'about-photo'})
        aboutPhoto.id = 'about-photo2'
        aboutPhoto.src = img1
    
        textContent.appendChild(title)
        textContent.appendChild(description)
    
        textPhotoWrapper.appendChild(textContent)
        textPhotoWrapper.appendChild(aboutPhoto)
    
        // aboutPageWrapper.appendChild(about)
        aboutPageWrapper.appendChild(textPhotoWrapper)
    }

    createSection1()
    createSection2()


    target.appendChild(aboutPageWrapper)


    
    let contacts = createEl.element('ul', {'class' : 'contacts'})
    let contactTitle = createEl.div({'class' : 'contact-title'})
    contactTitle.textContent = 'Contact'
    let phone = createEl.element('li', {'id' : 'phone'})
    phone.textContent = contactData.phone
    let email = createEl.element('li', {'id' : 'email'})
    email.textContent = contactData.email
    let address = createEl.element('li', {'id' : 'address'})
    address.textContent = contactData.address


    contacts.appendChild(contactTitle)
    contacts.appendChild(phone)
    contacts.appendChild(email)
    contacts.appendChild(address)
    target.appendChild(contacts)


    // let footer = createEl.div({'class' : 'about-footer'})
    // let copyright = createEl.div({'id' : 'copyright'})
    // copyright.textContent = 'Website by J Shadbolt'

    // footer.appendChild(copyright)
    // target.appendChild(footer)


    let bannerTwo = createEl.div({'class' : 'about-banner-two'})
    target.appendChild(bannerTwo)

    // add some about the team
    // add more images, spanning whole length of website
}

export default aboutPage;