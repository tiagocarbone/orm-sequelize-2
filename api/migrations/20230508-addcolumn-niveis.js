'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('niveis', 'deletedAt',  {
        
        allowNull: true,
        type: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('niveis', 'deletedAt');
  }
};