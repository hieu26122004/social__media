const http = require("http");
const app = require("./app");
const config = require("./config/config");
const db = require("./models");

const server = http.createServer(app);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully ");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
