'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      models.Ingredient.belongsToMany(models.IngredientCategory, {
        through: models.IngredientCategoriesIngredient,
        foreignKey: 'ingredient_category_id',
      });

      models.Ingredient.hasMany(models.StepsIngredient, {
        foreignKey: 'ingredient_id',
      });
    }
  }
  Ingredient.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      color: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ingredient',
    }
  );
  return Ingredient;
};
