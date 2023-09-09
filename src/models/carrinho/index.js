const {Sequelize, DataTypes} = require("sequelize");
const db = require("./../../db/connect")

const Carrinho = db.define("carrinho", {
    id: {autoIncrement: true, primaryKey : true , type: DataTypes.INTEGER}
})


module.exports = Carrinho;