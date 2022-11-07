'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pessoas',
      [
        {
          nome: 'Peter Parker',
          ativo: true,
          email: 'peter@peter.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Gwen Stacy',
          ativo: true,
          email: 'gwen@gwen.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Flash Thompson',
          ativo: false,
          email: 'flash@flash.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Marry Jane',
          ativo: true,
          email: 'marry@marry.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'May Parker',
          ativo: true,
          email: 'may@may.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Jonah Jameson',
          ativo: true,
          email: 'jonah@jonah.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  },
};
