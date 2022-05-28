'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tickets', 
      [
        {
          user_id: 1,
          trip_id: 2,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17',
        },
        {
          user_id: 2,
          trip_id: 1,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17',
        },
        {
          user_id: 2,
          trip_id: 3,
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17',
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
