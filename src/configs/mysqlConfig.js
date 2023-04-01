const mysql = require("mysql");
require("dotenv").config({ path: "src/configs/.env" });
const { init } = require("../database/init");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

connection.query(init.createDb, (error, results) => {
  if (error) throw error;
  else
    connection.query(init.useDb, (error, results) => {
      if (error) throw error;
      else {
        connection.query(init.createTables.manager, (error, results) => {
          if (error) throw error;
        });
        connection.query(init.createTables.technician, (error, results) => {
          if (error) throw error;
        });
        connection.query(init.createTables.task, (error, results) => {
          if (error) throw error;
        });
      }
    });
});

module.exports.connection = connection;
