'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeCategory extends Model {
    static associate(models) {
      models.RecipeCategory.belongsToMany(models.Recipe, {
        through: models.RecipeCategoriesRecipe,
        foreignKey: 'recipe_id',
      });

      models.RecipeCategory.hasOne(models.RecipeCategory, {
        foreignKey: 'parent_id',
      });
    }
  }
  RecipeCategory.init(
    {
      parent_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RecipeCategory',
    }
  );
  return RecipeCategory;
};
