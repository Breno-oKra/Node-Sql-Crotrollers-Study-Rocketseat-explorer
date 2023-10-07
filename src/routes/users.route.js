const {Router} = require("express")

const UsersController = require('../controllers/UserController')

const userRoutes = Router()

const userController = new UsersController()

userRoutes.post('/',userController.create)

module.exports = userRoutes
