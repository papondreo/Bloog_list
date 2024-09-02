'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.bulkInsert('Posts', [{
      title: 'John Doe',
      description: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Bob',
      description: '222222222',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Bill',
      description: '333333333333',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    
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
