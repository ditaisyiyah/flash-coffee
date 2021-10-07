'use strict';
const fs = require('fs');

const stepIngredients = JSON.parse(
  fs.readFileSync('./seeders/StepsIngredients.json', 'utf8')
);
stepIngredients.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StepsIngredients', stepIngredients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StepsIngredients', null, {});
  },
};
