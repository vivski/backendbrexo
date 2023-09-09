const express = require("express")
const User = require("../../models/user")
const Favoritos = require("./../../models/favoritos")
const Carrinho = require("../../models/carrinho")

const Router = express.Router()


Router.route("/login").post( async (req,res,next) => {
  const dadosUsuario = req.body
  try{ 
  const usuario = await User.findOne({email: dadosUsuario.email, senha: dadosUsuario.senha,  
    include: [{model: Carrinho, as: "carrinhoUsuario"},{model: Favoritos, as: "favoritosUsuario"}]}) 
  if(usuario){
    res.json({email: usuario })
  }  
  } catch(erro) {res.json(erro)}
  
})



Router.route("/cadastro").post( async (req,res,next) => {
  const cadastro = req.body
  console.log(cadastro)
  const registro = await User.create(cadastro)
  const createFavoritos = await Favoritos.create({userId : registro.id})
  const carrinho = await Carrinho.create({userId: registro.id})
  res.json(registro)

}

)

Router.route("atualizar").put( async (req,res,next) => {
  const dadosUsuario = req.body
  const usuario = await User.findByPk(dadosUsuario.id)
  if (usuario) {
     if(dadosUsuario) {
      
     }
  }

})

module.exports= Router