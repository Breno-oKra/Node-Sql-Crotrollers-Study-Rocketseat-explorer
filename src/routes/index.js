const { Router } = require("express")

const userRoutes = require('./users.route.js')
const notesRoutes = require('./notes.routes.js')
const tagsRoutes = require('./tags.routes.js')

const routes = Router()

routes.use("/users", userRoutes);
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes;