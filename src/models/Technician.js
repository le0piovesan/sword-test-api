const { DataTypes } = require("sequelize");
const db = require("../configs/sequelizeConfig");
const Manager = require("./Manager");

const Technician = db.define("technician", {
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
  managerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Technician.belongsTo(Manager, { foreignKey: "managerId", allowNull: false });

Technician.sync();

module.exports = Technician;
