const { Sequelize } = require('sequelize');

// Add databse connection to sequelize
const sequelize = new Sequelize(process.env.JAWSBD_URL || {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});


// dotenv require

require('dotenv').config();



module.exports = sequelize;