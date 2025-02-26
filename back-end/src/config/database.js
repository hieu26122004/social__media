const config = require("./config");

module.exports = {
  development: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
