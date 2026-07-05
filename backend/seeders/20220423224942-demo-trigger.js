'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trigger', [
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taken: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
