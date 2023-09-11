const express = require("express")

const Carrinho = require("./../../models/carrinho")
const Produtos = require("../../models/produtos")

const Router = express.Router()


Router.route("/criarCarrinho").post(async (req,res,next) => {
    const {id_produto, id_usuario,nome, preco,imagem, quantidade} = req.body
    
    try{
      const produtoRegistrado = await Produtos.findOne({serialProduto: id_produto})
      
      if(produtoRegistrado){
        const resposta = await Carrinho.create({
           id_produto: produtoRegistrado.id,
           id_usuario: id_usuario,
           quantidade: quantidade
          }) 
       return res.json(resposta)
  
      }else{
        const product =  await Produtos.create({
          nome: nome, 
          preco: preco,
          imagem: imagem,
          serialProduto:id_produto
        })
        const resposta = await Carrinho.create({
          id_produto: product.id,
          id_usuario: id_usuario,
          quantidade: quantidade
          
        })
        return res.json(resposta)
      }
    }catch(error){
      return res.send(error)
    }

    
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