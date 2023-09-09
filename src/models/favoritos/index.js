const {Sequelize, DataTypes} = require("sequelize");
const db = require("./../../db/connect")

const Favoritos = db.define("favoritos", {
    id: {autoIncrement: true, primaryKey : true , type: DataTypes.INTEGER}
})


module.exports = Favoritos;