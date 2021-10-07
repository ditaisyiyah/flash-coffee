'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientCategory extends Model {
    static associate(models) {
      models.IngredientCategory.belongsToMany(models.Ingredient, {
        through: models.IngredientCategoriesIngredient,
        foreignKey: 'ingredient_id',
      });
    }
  }
  IngredientCategory.init(
    {
      parent_id: DataTypes.INTEGER,
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'IngredientCategory',
    }
  );
  return IngredientCategory;
};
