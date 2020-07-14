const route = require('express').Router()
const HomeController = require('../controllers/home')

route.post('/register',HomeController.register)
route.post('/login',HomeController.register)
route.post('/googlelogin',HomeController.googleLogin)

module.exports = route