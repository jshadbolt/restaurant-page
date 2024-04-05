// generate menu from object array 

import createEl from '../utility/createEl.js'
import attachEl from '../utility/attachEl.js'


function menuPage(target) {
    let test = createEl.div({'class' : 'testing'})
    test.textContent = 'RESTAURANT'
    attachEl(test, target, 'append')
}

export default menuPage;