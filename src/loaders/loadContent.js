import pages from './pages'

let loadContent = function(pageName) {
    const target = document.querySelector('#content')

    // remove all current content
    while (target.firstChild) {
        target.removeChild(target.firstChild)
    }

    // invoke page
    pages[pageName](target)
}


export default loadContent