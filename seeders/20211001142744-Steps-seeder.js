'use strict';
const fs = require('fs');

const steps = JSON.parse(fs.readFileSync('./seeders/Steps.json', 'utf8'));
steps.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Steps', steps, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Steps', null, {});
  },
};
