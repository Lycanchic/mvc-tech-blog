const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const bcrypt = require('brycpt');

//Create user Model and check password upon login
class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
} 

User.init(
    {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
  })

    