"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      "0c6fcaa8-ef51-4da7-9948-a502671c6bf5",
      "55c827d1-4211-47ba-af50-392402dd6bfb",
      "8614eb4d-ae88-4624-a83c-b1313538f61b",
      "867f2f78-5a1c-44e8-be11-be10b658e705",
      "949d69f6-e765-4564-81e1-27a278b4317c",
      "a2a3dab9-cfd0-4380-82ad-2d944f26cd71",
      "ab94ebf0-d297-4c5d-8c86-dc90cf7c9faf",
      "b4d8f79c-1e06-4565-8e72-decdccc6db5b",
      "b5963fa0-b5ef-41a0-b0fa-cea65fbfebf5",
      "bc788336-99fd-4b7c-af33-5d27ff55e14d",
      "d1146ea1-7eb8-4cd5-9a5d-7bbb163846bf",
      "ecc42a27-24c0-4e78-9e88-295f8b66d212",
    ];
    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const likes = Array.from({ length: 100 }, () => ({
      uuid: faker.string.uuid(),
      user_id: faker.helpers.arrayElement(users),
      post_id: faker.helpers.arrayElement(posts),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Likes", likes, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
