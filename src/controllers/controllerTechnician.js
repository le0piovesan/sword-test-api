const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");

class ControllerTechnician {
  async getTasks(req, res) {
    const { id } = req.params;

    await connection.query(sql.technician.getTasks(id), (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  // Admin sample functions

  async listAllTechnicians(req, res) {
    await connection.query(sql.admin.selectAllTechnicians, (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  async createTechnician(req, res) {
    const { name, field, idManager = 1 } = req.body;

    await connection.query(
      sql.admin.createTechnician(name, field, idManager),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results, 201);
      }
    );
  }
}

module.exports = new ControllerTechnician();
