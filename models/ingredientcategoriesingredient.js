'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientCategoriesIngredient extends Model {
    static associate(models) {
      // define association here
    }
  }
  IngredientCategoriesIngredient.init(
    {
      ingredient_category_id: DataTypes.INTEGER,
      ingredient_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'IngredientCategoriesIngredient',
    }
  );
  return IngredientCategoriesIngredient;
};
