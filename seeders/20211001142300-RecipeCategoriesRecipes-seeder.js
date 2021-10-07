'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'RecipeCategoriesRecipes',
      [
        {
          recipe_category_id: 1,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipe_category_id: 2,
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipe_category_id: 3,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipe_category_id: 2,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipeCategoriesRecipes', null, {});
  },
};
