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
    await queryInterface.bulkInsert('stations', [
      {

        name: 'Ben xe Nuoc Ngam',
        address: 'Ha Noi',
        province: 'Ha Noi',
        createdAt: '2022-05-11 14:26:19',
        updatedAt: '2022-05-11 14:26:19',
      }, 
      {
        name: 'Ben xe My Dinh',
        address: 'Ha Noi',
        province: 'Ha Noi',
        createdAt: '2022-05-11 14:26:19',
        updatedAt: '2022-05-11 14:26:19',
      }, 
      {
        name: 'Ben xe Mien Dong',
        address: 'Sai Gon',
        province: 'Sai Gon',
        createdAt: '2022-05-11 14:26:19',
        updatedAt: '2022-05-11 14:26:19',
      },
      {
        name: 'Ben xe Chau Doc',
        address: 'An Giang',
        province: 'An Giang',
        createdAt: '2022-05-11 14:26:19',
        updatedAt: '2022-05-11 14:26:19',
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};
