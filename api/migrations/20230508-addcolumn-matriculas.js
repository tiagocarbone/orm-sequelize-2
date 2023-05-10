'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('matriculas', 'deletedAt',  {
        
        allowNull: true,
        type: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('matriculas', 'deletedAt');
  }
};