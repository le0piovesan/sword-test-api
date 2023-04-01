const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");

class ControllerManager {
  // Admin sample functions

  async listAllManagers(req, res) {
    connection.query(sql.admin.selectAllManagers, (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  async createManager(req, res) {
    const { name, company } = req.body;

    connection.query(
      sql.admin.createManager(name, company),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results, 201);
      }
    );
  }
}

module.exports = new ControllerManager();
