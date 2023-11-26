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

// Router.route("/deletarItemFavoritado").delete(async (req, res, next) => {
//   const body = req.body;
//   const produto = await Favoritos.findOne({ where: { id_produto : body.id_produto } });
//   produto.destroy;
// });

Router.route("/deletarItemFavoritado").delete(async (req, res, next) => {
  const { id_produto } = req.body;
  try {
    const favorito = await Favoritos.findOne({ where: { id_produto } });

    if (!favorito) {
      return res.status(404).json({ message: "Item favorito não encontrado" });
    }

    await favorito.destroy();

    return res.status(200).json({ message: "Item favorito removido com sucesso" });
  } catch (error) {
    console.error("Erro ao remover o item favorito:", error);
    return res.status(500).json({ message: "Erro ao remover o item favorito" });
  }
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
