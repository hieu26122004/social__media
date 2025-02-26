"use strict";
const { faker } = require("@faker-js/faker");

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
    const posts = [
      "0dcec205-bba4-4106-a5a0-1d4b51ed855a",
      "6c0a76a8-18b3-4ea1-9689-82b37f818e25",
      "1bcc26a7-b2e4-408a-ac26-3fd9801169ec",
      "578f51bd-9243-41e2-bf9b-35a190cc4dba",
      "ecd6814c-c01b-4853-87c8-242b953e9a98",
      "00bfdc85-5f99-4493-bec9-0a7effe96783",
      "5db2299b-88fb-4146-9b5a-6d3477f6d7a3",
      "6f4cd9ba-ab6f-4d14-83fe-fd575e0efa4d",
      "767cbe25-686d-43fc-96af-abf5b48b2825",
      "a6b69049-6744-43e9-95f4-275e9506bdbb",
      "83fc1b22-01b7-4bc6-9803-4c4c19844691",
      "9d09f753-7a75-4a53-b628-d221c4d5249a",
      "17ddfe24-ce36-4123-b9fa-b6d798cd896f",
      "d166c21f-21e0-4dc5-9014-233c88b80d49",
      "522ce685-df5c-4d19-83c2-69c3fa8ab525",
      "76844053-56b2-48ac-9381-cda6f784c948",
      "8d47ffd4-fa1b-4854-be02-5f70fe5a151b",
      "c398aba1-ff8a-4d09-91c8-5a84d95c189e",
      "c5105544-fa5f-4715-a900-daa1d575cdd3",
      "fe38d047-1d6c-483a-b25f-8a2c584851a4",
      "0b16cdb0-58c8-48ee-96f7-540928564abd",
      "2c35abad-b7c6-44ce-9e5a-63ae593efcde",
      "9f7a6077-bd2a-4d7a-97d8-77fb36f912bc",
      "ae279a0b-1155-44f7-beb5-6d9073056f6e",
      "fafd569a-8398-45ab-885f-441727c5e67f",
      "70f29b66-9027-4a68-8b17-14d784b38056",
      "f44b6398-b93d-400c-9a64-81689735f9d0",
      "cc2a72e3-e1ba-4223-bb62-54e0cf2fe7b9",
      "d7dba923-791d-4057-8110-4df7a24e0abd",
      "cb2641dc-f8aa-49d8-be4c-2841f7c2c458",
    ];

    const likes = Array.from({ length: 30 }, () => ({
      uuid: faker.string.uuid(),
      content: faker.lorem.lines({ max: 3, min: 1 }),
      user_id: faker.helpers.arrayElement(users),
      post_id: faker.helpers.arrayElement(posts),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Comments", likes, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
