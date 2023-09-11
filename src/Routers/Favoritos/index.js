const express = require("express");

const Favoritos = require("./../../models/favoritos");
const Produtos = require("../../models/produtos");

const Router = express.Router();

Router.route("/adicionarFavoritos").post(async (req, res, next) => {
  const { id_produto, id_usuario, nome, preco, imagem } = req.body;

  const produtoRegistrado = await Produtos.findOne({
    where: { serialProduto: id_produto },
  });

  if (produtoRegistrado) {
    const resposta = await Favoritos.create({
      id_usuario: id_usuario,
      id_produto: produtoRegistrado.id,
    });
    res.json(resposta);
  } else {
    const product = await Produtos.create({
      nome: nome,
      preco: preco,
      imagem: imagem,
      serialProduto: id_produto,
    });
    const resposta = await Favoritos.create({
      id_usuario: id_usuario,
      id_produto: product.id,
    });
    res.json(resposta);
  }
});

Router.route("/deletarItemFavoritado").delete(async (req, res, next) => {
  const { id } = req.body;
  const produto = await Favoritos.findOne({ where: { favoritosId: id } });
  produto.destroy;
});

Router.route("/listarFavoritos").post(async (req, res, next) => {
  const { id_usuario } = req.body;

  const listFavoritos = await Favoritos.findAll({
    where: { id_usuario: id_usuario },
    include: Produtos,
    attributes:{exclude:["createdAt", "updatedAt"]}
  })
  res.json(listFavoritos);
});

module.exports = Router;
