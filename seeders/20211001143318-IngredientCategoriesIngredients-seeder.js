'use strict';
const fs = require('fs');

const ingredientCategoriesIngredients = JSON.parse(
  fs.readFileSync('./seeders/IngredientCategoriesIngredients.json', 'utf8')
);
ingredientCategoriesIngredients.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'IngredientCategoriesIngredients',
      ingredientCategoriesIngredients,
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'IngredientCategoriesIngredients',
      null,
      {}
    );
  },
};
