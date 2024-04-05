import './style.css';
import loadContent from './loadContent.js';

window.onload = loadContent('home')

const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const aboutBtn = document.querySelector('#about')
homeBtn.addEventListener('click', () => loadContent('home'))
menuBtn.addEventListener('click', () => loadContent('menu'))
aboutBtn.addEventListener('click', () => loadContent('about'))



