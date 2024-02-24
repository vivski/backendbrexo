const {Sequelize} = require("sequelize")


    
    if(process.env.AMBIENTE == "prod"){
    const db = new Sequelize("postgres://eqcmvtzt:iQTPTUN_c-9SlLPsjoT9bNjpy0F1GIm6@silly.db.elephantsql.com/eqcmvtzt")
    module.exports = db; 
    }
    else{
        
    const db = new Sequelize('brexobackend','root','mysql2002', { host:"localhost", dialect:"mysql"})
    module.exports = db;
    }


