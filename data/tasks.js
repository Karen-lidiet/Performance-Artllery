const faker = require('faker')

function taskContent(taskContenxt, events, done) {
    taskContenxt.vars.content = faker.lorem.words()
    taskContenxt.vars.updateContent = faker.lorem.words()
    done()
}

module.exports = {taskContent}