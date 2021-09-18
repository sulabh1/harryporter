const dotenv = require("dotenv").config();
const http = require("http");

const app = require("./app");
const { sequelize } = require("./models");

const server = http.createServer(app);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  sequelize.authenticate().then(() => {
    console.log("db connection successful");
  });
  console.log(`listening to the port ${port}`);
});
