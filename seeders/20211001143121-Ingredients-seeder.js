'use strict';
const fs = require('fs');

const ingredients = JSON.parse(
  fs.readFileSync('./seeders/Ingredients.json', 'utf8')
);
ingredients.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ingredients', ingredients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
