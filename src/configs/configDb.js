const mysql = require("mysql");
const { init } = require("../database/init");
require("dotenv").config({ path: "src/configs/.env" });

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;
  connection.query(init.createDb);
  connection.query(init.useDb);
  connection.query(init.createTables.task);
  connection.query(init.createTables.technician);
  connection.query(init.createTables.manager);
});

module.exports.connection = connection;
