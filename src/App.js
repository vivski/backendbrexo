const express = require("express")
const usuarioRouter = require("./Routers/User")
const carrinhoRouter = require("./Routers/Carrinho")
const favoritosRouter = require("./Routers/Favoritos")
const produtosRouter = require("./Routers/Produtos")
const App = express()
const cors = require("cors")
App.use(cors())

const Produtos = require("./models/produtos")
const Favoritos = require("./models/favoritos")
const Carrinho = require("./models/carrinho")
const User = require("./models/user")

const database = require("./db/connect")


App.use(express.json())
App.use(usuarioRouter)
App.use(carrinhoRouter)
App.use(favoritosRouter)
App.use(produtosRouter)

const port = 3000
App.listen(port, async () => { 

   Favoritos.belongsTo(User, { foreignKey: "id_usuario"})
   Favoritos.belongsTo(Produtos, {foreignKey: "id_produto"})

   Carrinho.belongsTo(User, {foreignKey: "id_usuario"})
   Carrinho.belongsTo(Produtos, {foreignKey: "id_produto"})


   console.log("servidor ligado")
   await database.sync({force: false})
   console.log("banco conectado")
} )





