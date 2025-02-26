"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = Array.from({ length: 10 }, () => ({
      uuid: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password:
        "$2a$10$BA6VKEAYNhVVOfMOoqDKrOqQA24pOtbdY.nNtRL9wQMQoK89R2Bt2" /* 12345678 */,
      cover_picture: faker.image.url({ height: 42, width: 42 }),
      profile_picture: faker.image.url(),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
