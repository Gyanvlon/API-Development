const Sequelize = require("sequelize")
const sequelize = require("../util/database")
 const InternationalCommittee = sequelize.define("internationalCommittee", {
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
     officeName:{
      type: Sequelize.STRING
     },
     country:{
        type: Sequelize.STRING,   
     },
     officeAddress:{
       type: Sequelize.STRING,
     },
     officeContactNo: {
      type: Sequelize.INTEGER,
     },
     officeEmail:{
      type: Sequelize.STRING
     }, 
     officeWebsite:{
      type: Sequelize.STRING
     },
    officeFaxNo:{
      type: Sequelize.INTEGER
     },
  estabilishedDate:{
  type: Sequelize.STRING
  }  
 })
 module.exports = InternationalCommittee