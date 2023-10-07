const AppError = require("../utils/AppError")
class UsersController {
  create(req, res) {
    const { name, email } = req.body;
    //um exemplo caso queira enviar um status de create junto do objeto
    if(!name) {
        throw new AppError("Nome é Obrigatorio")
    }
    res.status(201).json({ name, email });
  }
  /* index - Get para listar varios Registro */
  /* show - Get para exibir um registro especifico */
  /* create - POSTa para criar um resgistro */
  /* update - PUT para atualizar um registro */
  /* delete - DELETE para emover um registro */
}

module.exports = UsersController;
