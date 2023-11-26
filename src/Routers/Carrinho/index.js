const express = require("express")

const Carrinho = require("./../../models/carrinho")
const Produtos = require("../../models/produtos")

const Router = express.Router()


Router.route("/criarCarrinho").post(async (req,res,next) => {
    console.log(res.body)
    const {id_produto, id_usuario,nome, preco,imagem, quantidade} = req.body
  
    console.log(id_usuario, id_produto)
    try{
      const produtoRegistrado = await Produtos.findOne( { where : {serialProduto: id_produto}})
      
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

Router.route("/deletarItemCarrinho/:id").delete(async (req,res,next) => {
 const id = req.params.id
 console.log(id)

 const produto =  await Carrinho.destroy({ where: { id_produto : id } })
 res.json(produto)
})


Router.route("/listarCarrinho").post(async (req,res,next) => {
  const {id_usuario} = req.body
 const carrinho = await Carrinho.findAll({where: {id_usuario : id_usuario}, include : Produtos, 
  attributes:{exclude:["createdAt", "updatedAt"]}})
 res.json(carrinho)
})




module.exports = Router