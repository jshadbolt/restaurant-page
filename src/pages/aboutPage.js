import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'


function aboutPage(target) {
    let test = createEl.div({'class' : 'testing'})
    test.textContent = 'about page'
    attachEl(test, target, 'append')
}

export default aboutPage;