const { Router } = require("express")

const userRoutes = require('./users.route.js')

const routes = Router()

routes.use("/users", userRoutes);

module.exports = routes;