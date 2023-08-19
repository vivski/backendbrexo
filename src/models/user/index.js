const { Sequelize, DataTypes } = require("sequelize");
const db = require("./../../db/connect")
const User = db.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha : {
        type: DataTypes.STRING,
        allowNull: false

    }
}

)

module.exports = User;