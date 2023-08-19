const express = require("express")
const usuarioRouter = require("./Routers/User")
const App = express()

const database = require("./db/connect")


App.use(express.json())
App.use(usuarioRouter)

const port = 3000
App.listen(port, async () => { 
   console.log("servidor ligado")
   await database.sync()
   console.log("banco conectado")
} )


