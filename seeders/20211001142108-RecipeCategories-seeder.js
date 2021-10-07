'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'RecipeCategories',
      [
        {
          name: 'American Food',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chinese Food',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Indonesian Food',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipeCategories', null, {});
  },
};
