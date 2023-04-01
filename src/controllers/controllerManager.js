const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");

class ControllerManager {
  //The manager can see tasks from all the technicians, delete them, and should be notified when some tech performs a task

  async getTechnicianTasks(req, res) {
    const { id } = req.params;

    await connection.query(
      sql.manager.getTechnicianTasks(id),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results);
      }
    );
  }

  // Admin sample functions

  async listAllManagers(req, res) {
    await connection.query(sql.admin.selectAllManagers, (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  async createManager(req, res) {
    const { name, company } = req.body;

    await connection.query(
      sql.admin.createManager(name, company),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results, 201);
      }
    );
  }
}

module.exports = new ControllerManager();
