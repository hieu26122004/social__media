"use strict";
const { faker } = require("@faker-js/faker");
const { VISIBILITY } = require("../../config/constant");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      "1717e9b8-ab53-4e5f-9509-da313292630a",
      "1be868da-c0eb-419a-9175-c7e02c05d564",
      "49a9139e-9f05-4277-a192-7674eefebecd",
      "7c757c50-b8f7-4abe-82eb-715a382bfa77",
      "802bee7a-e966-4d86-b91e-33cd94bc74d9",
      "8369e620-7c24-44ff-aa3b-dc8128a31bed",
      "8d6bafd4-3fbc-4768-84cc-85bd9905fa02",
      "9738f932-dac1-4ed1-8e59-0036ecb60aac",
      "be052d0a-5352-4ce5-b4ce-3dfa63d37219",
      "c0bed0cc-dd95-440b-9329-77dd5064680c",
      "fab560d7-707c-43b2-835e-273eeeb2df5f",
    ];
    const posts = Array.from({ length: 30 }, () => ({
      uuid: faker.string.uuid(),
      description: faker.lorem.lines({ max: 5, min: 3 }),
      visibility: faker.helpers.arrayElement([
        VISIBILITY.PUBLIC,
        VISIBILITY.PRIVATE,
      ]),
      images: faker.image.url(),
      user_id: faker.helpers.arrayElement(users),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Posts", posts, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
