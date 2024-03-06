const { Model, DataTypes, INTEGER, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');
// const { INTEGER } = require('sequelize');

class Category extends Model {}

Category.init(
  {
    id:{
      // integer, no null values,set primary key,uses auto increment 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true,
    },
    category_name:{
      // string and no null values
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
