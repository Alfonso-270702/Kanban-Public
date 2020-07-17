const route = require('express').Router()
const HomeController = require('../controllers/home')

route.post('/register',HomeController.register)
route.post('/login',HomeController.login)
route.post('/googleLogin',HomeController.googleLogin)

module.exports = route