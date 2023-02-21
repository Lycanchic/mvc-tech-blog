const  Sequelize = require('sequelize');
// dotenv require

require('dotenv').config();



// Add databse connection to sequelize
const sequelize = process.env.JAWSBD_URL 
    ? new Sequelize(process.env.JAWSBD_URL)  
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
       host: 'localhost',
       dialect: 'mysql',
       port: 3306,
   
});




module.exports = sequelize;