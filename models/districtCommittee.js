const Sequelize = require("sequelize")
const sequelize = require("../util/database")
 const DistrictCommittee = sequelize.define("districtCommittee", {
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
     regidentNo:{
        type: Sequelize.INTEGER
       },
     districtName:{
       type: Sequelize.STRING,
     },
     codeNo: {
      type: Sequelize.INTEGER,
     },
     kathmanduContactNo:{
      type: Sequelize.INTEGER
     }
 })
 module.exports = DistrictCommittee