import './style.css';
import loadContent from './loaders/loadContent.js';
import styleSelected from './utility/styleSelected.js';


document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});

const nav = document.querySelector('nav')


function handleNavBtn(btn) {
    styleSelected(btn, 'selected')
    loadContent(btn.id)
}

nav.addEventListener('click', e => {
    const button = e.target.closest('button');
    handleNavBtn(button)
})


