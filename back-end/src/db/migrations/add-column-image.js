"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "profile_picture_id", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "cover_picture_id", {
      type: Sequelize.STRING,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "profile_picture_id");
    await queryInterface.removeColumn("Users", "cover_picture_id");
  },
};
