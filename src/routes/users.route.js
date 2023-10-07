const {Router} = require("express")

const userRoutes = Router()
const UsersController = require('../controllers/UserController')



const userController = new UsersController()

userRoutes.post('/',userController.create)

module.exports = userRoutes
