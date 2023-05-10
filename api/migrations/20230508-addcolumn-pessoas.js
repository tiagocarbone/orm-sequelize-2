'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('pessoas', 'deletedAt',  {
        
        allowNull: true,
        type: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('pessoas', 'deletedAt');
  }
};