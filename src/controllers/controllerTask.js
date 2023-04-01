const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");

class ControllerTask {
  // Admin sample functions

  async listAllTasks(req, res) {
    await connection.query(sql.admin.selectAllTasks, (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  async createTask(req, res) {
    const { summary, performed, idTechnician = 1 } = req.body;

    await connection.query(
      sql.admin.createTask(summary, performed, idTechnician),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results, 201);
      }
    );
  }
}

module.exports = new ControllerTask();
