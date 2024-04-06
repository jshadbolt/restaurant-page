import './style.css';
import loadContent from './loaders/loadContent.js';
import styleSelected from './utility/styleSelected.js';


document.addEventListener('DOMContentLoaded', () => {
    loadContent('menu');
});

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


