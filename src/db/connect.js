const {Sequelize} = require("sequelize")

const db = new Sequelize('brexobackend','root','senhaforte@lula13', { host:"localhost", dialect:"mysql"})

module.exports= db 