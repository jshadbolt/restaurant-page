import homePage from './pages/homePage.js'
import menuPage from './pages/menuPage.js'
import aboutPage from './pages/aboutPage.js'


let pages = (function() {

    let avaliable = { 
        'home' : homePage,
        'menu': menuPage,
        'about' : aboutPage
    }

    return avaliable

})()

export default pages