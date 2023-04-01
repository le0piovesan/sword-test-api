const { DataTypes } = require("sequelize");
const db = require("../configs/db");
const Technician = require("./Technician");

const Task = db.define("task", {
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
  field: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technicianId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Task.belongsTo(Technician, { foreignKey: "technicianId", allowNull: false });

Task.sync();

module.exports = Task;
