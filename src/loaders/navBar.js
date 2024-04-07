import loadContent from './loadContent.js';
import styleSelected from '../utility/styleSelected.js';

function navBar() {

    const nav = document.querySelector('nav')

    function handleNavBtn(btn) {
        styleSelected(btn, nav, 'button', 'selected')
        loadContent(btn.id)
    }

    nav.addEventListener('click', e => {
        const button = e.target.closest('button');
        if (button === null) {
            console.log('nav tab error')
            return
        }
        // let id = button.id
        // console.log(button.id)

        handleNavBtn(button)
        
    })

}

export default navBar;