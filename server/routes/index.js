const route = require('express').Router()
const homeRoute = require('./homeRoute')
const kanbanRoute = require('./kanbanRoute')

route.use('/',homeRoute)
route.use('/kanban',kanbanRoute)

module.exports = route