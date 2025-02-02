'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        titleCased(str){
          let words = str.split(" ")
          for(const word of words) {
            if(word[0] === word[0].toLowerCase()){
              throw new Error("Names must be Title Cased")
            }
          }
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args:[0,240],
          message: "facts can not be more than 240 characters"
        }
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull:false,
      validate:{
        min:{
          args: [0],
          message: "millimeters must be a positive value"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};