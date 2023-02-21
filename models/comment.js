const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "users",
  //       key: "id",
  //     },  
  //   },
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "users",
  //       key: "id",
  //     },
  //   },
  //   postId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "posts",
  //       key: "id",
  //     },
  //   },
  // },
  // {
  },
  {
    sequelize,
   // modelName: "comment",
  }
);

module.exports = Comment;
