// dbconfig.js or wherever you create the Sequelize instance
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: console.log,  // logs SQL queries
});


module.exports = sequelize;
