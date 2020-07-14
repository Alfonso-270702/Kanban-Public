'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Note.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Title must be filled'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Category must be filled'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Author must be filled'
        }
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};