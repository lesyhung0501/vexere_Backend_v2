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
    await queryInterface.bulkInsert('users', 
      [
        {
          name: 'Le Sy Hung',
          email: 'abc@gmail.com',
          password: '123456',
          numberphone: '123456789',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
        {
          name: 'Sy Hung',
          email: 'xyz@gmail.com',
          password: '123456',
          numberphone: '123456789',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeuV0rX2u7s_wECV0YnQ6Hr2ZfW2Tpi6WZw&usqp=CAU',
          type: 'ADMIN',
          createdAt: '2022-05-20 11:50:17',
          updatedAt: '2022-05-20 11:50:17'
        },
      ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
