const express = require("express")
const User = require("../../models/user")
const Favoritos = require("./../../models/favoritos")

const Router = express.Router()


Router.route("/login").post( async (req,res,next) => {
  const usuario = req.body
  
})

Router.route("/cadastro").post( async (req,res,next) => {
  const cadastro = req.body
  console.log(cadastro)
  const registro = await User.create(cadastro, {include: [Favoritos]})
  res.json(registro)

}

)

module.exports= Router