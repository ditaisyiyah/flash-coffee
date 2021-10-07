'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipes',
      [
        {
          name: 'Burger',
          description: 'burger is bur with ger',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kimchi',
          description: 'kim is kim with chi',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bakso',
          description: 'bakso is bak with so',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bakpao',
          description: 'bak is bak with pao',
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
