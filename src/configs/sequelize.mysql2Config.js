const mysql = require("mysql2");
require("dotenv").config({ path: "src/configs/.env" });

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = connection;
