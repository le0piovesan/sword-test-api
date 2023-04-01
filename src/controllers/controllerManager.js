const { responseSuccess, responseError } = require("../utils/response");
// const { connection } = require("../configs/configDb.js");
// const { sql } = require("../database/sql");
const { Manager } = require("../models/Manager");
const { Technician } = require("../models/Technician");
const { Task } = require("../models/Task");

class ControllerManager {
  async listManager(req, res) {
    // connection.query(sql.selectManagers, (error, results) => {
    //   if (error) return responseError(res, error);
    //   else responseSuccess(res, results);
    // });
  }

  async createManager(req, res) {
    const { name, company } = req.params;

    // connection.query(sql.createManager(name, company), (error, results) => {
    //   if (error) return responseError(res, error);
    //   else responseSuccess(res, results, 201);
    // });
  }
}

module.exports = new ControllerManager();
