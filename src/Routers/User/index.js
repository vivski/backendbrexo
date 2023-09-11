const express = require("express");
const User = require("../../models/user");
const Favoritos = require("./../../models/favoritos");
const Carrinho = require("../../models/carrinho");

const Router = express.Router();

Router.route("/login").post(async (req, res, next) => {
  const dadosUsuario = req.body;
  try {
    const usuario = await User.findOne({
      where: { email: dadosUsuario.email, senha: dadosUsuario.senha },
    });
    if (usuario) {
      res.json({ email: usuario.email, id_usuario: usuario.id });
    }
  } catch (erro) {
    res.json(erro);
  }
});

Router.route("/cadastro").post(async (req, res, next) => {
  const cadastro = req.body;
  console.log(cadastro);
  const registro = await User.create(cadastro);
  res.json(registro);
});

Router.route("atualizar").put(async (req, res, next) => {
  const dadosUsuario = req.body;
  const usuario = await User.findByPk(dadosUsuario.id);
  if (usuario) {
    if (dadosUsuario) {
    }
  }
});

module.exports = Router;
