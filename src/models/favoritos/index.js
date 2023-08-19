const {Sequelize, DataTypes} = require("sequelize");
const User = require("./../user")
const db = require("./../../db/connect")

const Favoritos = db.define("favoritos", {})

User.hasOne(Favoritos)
module.exports = Favoritos;