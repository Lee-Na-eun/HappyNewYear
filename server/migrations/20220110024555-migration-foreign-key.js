'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. foreign key 위해 table column 넣어주기
    await queryInterface.addColumn('Messages', 'sendUserId', Sequelize.INTEGER);

    // foreign key 만들어주기
    await queryInterface.addConstraint('Messages', {
      fields: ['sendUserId'],
      type: 'foreign key',
      name: 'sendUserIdFK',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 만든 foreign key 지워주기
    await queryInterface.removeConstraint('Messages', 'sendUserIdFK');
    // 만든 column 지워주기
    await queryInterface.removeColumn('Messages', 'sendUserId');
  },
};
