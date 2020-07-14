'use strict';
const { encrypt } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Note, {foreignKey: 'userId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Name must be filled'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Email must be filled'
        }
      },
      unique:{
        msg: 'Email already exists'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Password must be filled'
        }
      }
    },
    organitation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate: (user)=>{
        user.password = encrypt(user.password)
        user.organitation = 'Hacktiv8'
      }
    }
  });
  return User;
};