import './style.css';
import loadContent from './loaders/loadContent.js'
import navBar from './loaders/navBar.js'

document.addEventListener('DOMContentLoaded', () => {
    loadContent('menu');
});

navBar()



