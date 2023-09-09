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
   User.hasOne(Favoritos, {foreignKey: "userId", as: "favoritosUsuario" })
   Favoritos.belongsTo(User)
   Favoritos.hasMany(Produtos, {foreignKey: "favoritosId", as: "favoritosProdutos"})
   User.hasOne(Carrinho, { foreignKey: "userId", as: "carrinhoUsuario"})
   Carrinho.belongsTo(User)
   Produtos.hasMany(Carrinho, { foreignKey: "produtoId", as: "produtosCarrinho"})


   console.log("servidor ligado")
   await database.sync({force: false})
   console.log("banco conectado")
} )


