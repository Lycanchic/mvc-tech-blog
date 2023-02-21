const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// class User extends Model {}
// User.init({
//   // user model properties here
// }, { sequelize, modelName: 'user' });

// class Post extends Model {}
// Post.init({
//   // post model properties here
// }, { sequelize, modelName: 'post' });

// class Comment extends Model {}
// Comment.init({
//   // comment model properties here
// }, { sequelize, modelName: 'comment' });

//User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
//
//Comment.belongsTo(User, { foreignKey: 'comment' });

Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' })

module.exports = { User, Post, Comment };
