const { Sequelize, DataTypes } = require("sequelize");
const db = require("./../../db/connect");

const Favoritos = db.define("favoritos", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
  },
  id_produto: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Favoritos;
