const { Sequelize, DataTypes, INTEGER } = require("sequelize");
const db = require("./../../db/connect");

const 
Produtos = db.define("produtos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  preco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialProduto: {
    type: INTEGER,
    allowNull: true,
  },
});

module.exports = Produtos;
