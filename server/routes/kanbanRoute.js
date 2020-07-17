const route = require('express').Router()
const KanbanController = require('../controllers/kanban')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.use(authentication)

route.post('/',KanbanController.create)
route.get('/',KanbanController.list)
route.put('/:id',authorization,KanbanController.editOne)
route.delete('/:id',authorization,KanbanController.deleteOne)

module.exports = route