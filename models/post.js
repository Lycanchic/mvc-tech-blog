const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Post extends Model {
    static init(sequelize) {
      return super.init({
        title: DataTypes.STRING,
        body: DataTypes.STRING
      }, {
        sequelize
      });
    }
  }


module.exports = Post;

