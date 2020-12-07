const Sequelize = require("sequelize")
const sequelize = require("../util/database")
 const ConventionAndMahadivesan = sequelize.define("conventionAndMahadivesan", {
     id:{
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
     },
     name:{
        type: Sequelize.STRING,
     },
     gender:{
        type: Sequelize.STRING,
     },
     contactNo:{
        type: Sequelize.INTEGER,
     },
     email: {
      type: Sequelize.STRING,
    },
     position: {
        type: Sequelize.STRING,
     },
     districtName:{
      type: Sequelize.STRING
     },
     localArea:{
       type: Sequelize.STRING,
     } 
 })
 module.exports = ConventionAndMahadivesan