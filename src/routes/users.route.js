const {Router} = require("express")

const UsersController = require('../controllers/UserController')

const userRoutes = Router()

//next seria para chamar o destino, para onde seguir o fluxo
function myMiddleware(request,response,next){

    if(!request.body.admin){
        return response.json({messege:"você não esta autorizado"})
    }

    next()
}

const userController = new UsersController()
// quando quiser passar o middleWare em todas as rotas, podemos usar userRoutes.use(myMiddleware)
// assim automaticamente ele é utilizado em todas as rotas
userRoutes.post('/', myMiddleware,userController.create)

module.exports = userRoutes
