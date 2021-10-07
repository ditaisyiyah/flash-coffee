'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeCategoriesRecipe extends Model {
    static associate(models) {
      // define association here
    }
  }
  RecipeCategoriesRecipe.init(
    {
      recipe_category_id: DataTypes.INTEGER,
      recipe_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RecipeCategoriesRecipe',
    }
  );
  return RecipeCategoriesRecipe;
};
