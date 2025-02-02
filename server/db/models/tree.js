'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    location: DataTypes.STRING,
    heightFt:{
      type: DataTypes.FLOAT,
      validate: {
        minValueZero(value){
          console.log('here!!!!!')
          if(value < 0) {
            throw new Error("Height must be a positive value");
          }
        }
      }
    }, 
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        minValueZero(value){
          if(value < 0) {
            throw new Error("Circumference must be a positive value")
          }
        }
      }

    }
    
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};