'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'IngredientCategories',
      [
        {
          name: 'Dry',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Liquid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Meat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vegetable',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('IngredientCategories', null, {});
  },
};
