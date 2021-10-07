'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StepsIngredient extends Model {
    static associate(models) {
      // models.StepsIngredient.belongsTo(models.Recipe, {
      //   foreignKey: 'recipe_id',
      // });

      // models.StepsIngredient.belongsTo(models.Step, { foreignKey: 'step_id' });

      models.StepsIngredient.belongsTo(models.Ingredient, {
        foreignKey: 'ingredient_id',
      });
    }
  }
  StepsIngredient.init(
    {
      recipe_id: DataTypes.INTEGER,
      ingredient_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      step_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'StepsIngredient',
    }
  );
  return StepsIngredient;
};
