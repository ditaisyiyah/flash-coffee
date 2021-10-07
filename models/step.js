'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    static associate(models) {
      models.Step.belongsTo(models.Recipe, {
        as: 'steps',
        foreignKey: 'recipe_id',
      });

      models.Step.belongsToMany(models.Recipe, {
        through: models.StepsIngredient,
        foreignKey: 'step_id',
      });
    }
  }
  Step.init(
    {
      recipe_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      step_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: DataTypes.TEXT,
      timer: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Step',
    }
  );
  return Step;
};
