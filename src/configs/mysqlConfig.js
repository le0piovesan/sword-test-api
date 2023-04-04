const mysql = require("mysql");
require("dotenv").config({ path: "src/configs/.env" });
const { init } = require("../database/init");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports.connection = connection;
