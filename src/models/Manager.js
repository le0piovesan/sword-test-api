const { DataTypes } = require("sequelize");
const db = require("../configs/db");

const Manager = db.define("manager", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Manager.sync();

module.exports = Manager;
