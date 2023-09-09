const express = require("express")

const Favoritos = require("./../../models/favoritos")
const Produtos = require("../../models/produtos")

const Router = express.Router()


Router.route("/adicionarFavoritos").post( async (req,res,next) => {
console.log("recebido")
 const {id, nome,preco,imagem} = req.body
 const produto = {id : id, preco : preco.replace("," , "."), nome: nome, imagem : imagem}

 const produtoRegistrado = await Produtos.findOne ( {where : { serialProduto : produto.id}})
 if (produtoRegistrado) {
 const resposta = await Favoritos.create({favoritosId: produtoRegistrado.id})
    res.json(resposta)
 } else {
    const product = await Produtos.create(produto)
    const resposta = await Favoritos.create({favoritosId : product})
    res.json(resposta)
 }

})

Router.route("/deletarItemFavoritado").delete( async (req,res,next) => {
const {id} = req.body
const produto = await Favoritos.findOne({where : {favoritosId : id}})
produto.destroy
})

Router.route("/listarFavoritos").get( async (req,res,next) => {
   const favoritos = await Favoritos.findAll()
   req.json(favoritos)
})



module.exports= Router