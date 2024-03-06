const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      // integer, no null values,set as primary key, auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      // integer, reference product model's id
      type: DataTypes.INTEGER,
      references:{
        model: 'product',
      }
    },
    tag_id: {
      // integer, reference tag model's id
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
