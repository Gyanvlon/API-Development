const Sequelize = require('sequelize');

const sequelize = new Sequelize('gpkf', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost'
});
module.exports = sequelize;
