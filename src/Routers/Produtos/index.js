const express = require("express")

const Produtos = require("./../../models/produtos")


const Router = express.Router()


Router.route("/criarProdutos").post( async (req,res,next) => {
 const Produto = req.body
 try {
    const respostaBanco = await Produtos.create(Produto)
    res.json(respostaBanco)  
 } catch (error) {
    res.send("erro")
 }

})

Router.route("/deletarProdutos").post( async (req,res,next) => {

    const {id} = req.body
    try {
        const respostaBanco = await Produtos.findByPk(id)
      if (respostaBanco) {
        await respostaBanco.destroy()
        res.send("produto deletado")
      }  
    } catch (error) {
        res.send("erro")
    }

})

Router.route("/listarProdutos").post( async (req,res,next) => {
 try {
    const respostaBanco = await Produtos.findAll()
    res.json(respostaBanco)
 } catch (error) {
   res.send("erro") 
 }
    

})

Router.route("/atualizarProdutos").post( async (req,res,next) => {
  const atualizacaoProdutos = req.body
  try {
    const produto = await Produtos.findByPk(atualizacaoProdutos.id)
    // const respostaBanco = await Produtos.update({nome: atualizacaoProdutos.nome}, {where: 1})
    const novoProduto = await produto.update({nome: atualizacaoProdutos.nome})
    res.json(novoProduto)
  } catch (error) {
    res.send("erro")
  }
    

})


module.exports = Router