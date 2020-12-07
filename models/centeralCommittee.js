const Sequelize = require("sequelize")
const sequelize = require("../util/database")
 const CenteralCommittee = sequelize.define("centeralCommittee", {
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
     ktmContactNo: {
      type: Sequelize.INTEGER,
     },
     disttrictContactNo: {
        type: Sequelize.INTEGER,
       } 
 })
 module.exports = CenteralCommittee