require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require('./utils/AppError.js')
const express = require('express')
const uploadConfig = require("./configs/upload")
const routes = require("./routes")

const app = express()
app.use(express.json())

app.use("/files",express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)
migrationsRun()
app.use((error, request, response, next) => {
    //primeiro vamos saber se é um erro do lado do cliente
    // instanceof, se a instancia de error for a mesma do appError
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message: error.message
        })
    }
    return response.status(500).json({
        status:"error",
        message: error.message
    })
})

app.listen(3000, () => {
    console.log('pronto baby')
})
