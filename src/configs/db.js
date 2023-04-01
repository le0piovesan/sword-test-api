const Sequelize = require("sequelize");
require("dotenv").config({ path: "src/configs/.env" });
const connection = require("./mysqlConfig");
const { init } = require("../database/init");

connection.query(init.createDb, (error, results) => {
  if (error) throw error;
  else
    connection.query(init.useDb, (error, results) => {
      if (error) throw error;
      else console.log("using database", results.stateChanges.schema);
    });
});

const sequelize = new Sequelize(
  "tasksdb",
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
