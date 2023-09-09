const express = require("express")

const Carrinho = require("./../../models/carrinho")
const Produtos = require("../../models/produtos")

const Router = express.Router()


Router.route("/criarCarrinho").post(async (req,res,next) => {
    const valoresProduto = req.body
    const produtoRegistrado = await Produtos.findOne({serialProduto: valoresProduto.id})
    if(produtoRegistrado){
      const resposta = await Carrinho.create({produtoId: produtoRegistrado.id}) 
      res.json(resposta)

    }else{
      const product =  await Produtos.create(valoresProduto)
      const resposta = await Carrinho.create({produtoId : product.id})
      res.json(resposta)
    }
    
    res.send("erro")
})

Router.route("/deletarItemCarrinho").delete(async (req,res,next) => {
 const {id} = req.body
 const produto =  await Carrinho.findByPk(id)
 produto.destroy
})


Router.route("/listarCarrinho").get(async (req,res,next) => {
 const carrinho = await Carrinho.findAll()
 req.json(carrinho)
})




module.exports = Router;