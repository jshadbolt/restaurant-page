import './style.css';
import loadContent from './loadContent.js';
import styleSelected from './utility/styleSelected.js';


window.onload = loadContent('home')

const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const aboutBtn = document.querySelector('#about')

homeBtn.addEventListener('click', () => {
    styleSelected(homeBtn, 'selected')

    loadContent('home')
})
menuBtn.addEventListener('click', () => {
    styleSelected(menuBtn, 'selected')

    loadContent('menu')
})
aboutBtn.addEventListener('click', () => {
    styleSelected(aboutBtn, 'selected')
    loadContent('about')
})








