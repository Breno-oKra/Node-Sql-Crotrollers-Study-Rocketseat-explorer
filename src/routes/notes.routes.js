const {Router} = require("express")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const NotesController = require('../controllers/NotesController')

const notesRouter = Router()

const notesController = new NotesController()

//usando middleware em todas as rotas
notesRouter.use(ensureAuthenticated)

notesRouter.get('/',notesController.index)
notesRouter.get('/:id',notesController.show)
notesRouter.post('/',notesController.create)
notesRouter.delete('/:id',notesController.delete)


module.exports = notesRouter
