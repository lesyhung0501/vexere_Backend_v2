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

    await queryInterface.bulkInsert('trips', 
    [
      {
        startTime: '2022-05-20 11:33:26',
        price: 200000,
        fromStation: 1,
        toStation: 2,
        createdAt: '2022-05-20 11:33:26',
        updatedAt: '2022-05-20 11:33:26'
      },
      {
        startTime: '2022-05-20 11:33:26',
        price: 150000,
        fromStation: 3,
        toStation: 4,
        createdAt: '2022-05-20 11:33:26',
        updatedAt: '2022-05-20 11:33:26'
      },
      {
        startTime: '2022-05-20 11:33:26',
        price: 240000,
        fromStation: 1,
        toStation: 4,
        createdAt: '2022-05-20 11:33:26',
        updatedAt: '2022-05-20 11:33:26'
      },
      {
        startTime: '2022-05-20 11:33:26',
        price: 240000,
        fromStation: 2,
        toStation: 5,
        createdAt: '2022-05-20 11:33:26',
        updatedAt: '2022-05-20 11:33:26'
      },
      {
        startTime: '2022-05-20 11:33:26',
        price: 240000,
        fromStation: 1,
        toStation: 3,
        createdAt: '2022-05-20 11:33:26',
        updatedAt: '2022-05-20 11:33:26'
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
