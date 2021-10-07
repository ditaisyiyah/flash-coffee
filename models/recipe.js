'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      models.Recipe.belongsTo(models.User, { foreignKey: 'author_id' });

      models.Recipe.belongsToMany(models.RecipeCategory, {
        through: models.RecipeCategoriesRecipe,
        foreignKey: 'recipe_category_id',
      });

      models.Recipe.hasMany(models.Step, {
        as: 'steps',
        foreignKey: 'recipe_id',
      });

      models.Recipe.belongsToMany(models.Step, {
        through: models.StepsIngredient,
        foreignKey: 'recipe_id',
      });

      models.Recipe.hasMany(models.StepsIngredient, {
        foreignKey: 'recipe_id',
      });
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      author_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  return Recipe;
};
