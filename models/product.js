const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Record = sequelize.define('shop',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },

  
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    price:{
        type:Sequelize.STRING,
        allowNull:false,

    },

    quantity:{
        type:Sequelize.STRING,
        allowNull:false,

    }

});

module.exports=Record;