'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('turmas', 'deletedAt',  {
        
        allowNull: true,
        type: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('turmas', 'deletedAt');
  }
};