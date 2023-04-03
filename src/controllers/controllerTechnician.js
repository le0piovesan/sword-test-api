const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");
const { createClient } = require("redis");
const client = createClient();
const publisher = client.duplicate();

publisher.connect();

class ControllerTechnician {
  async getTasks(req, res) {
    const { id } = req.params;

    await connection.query(sql.technician.getTasks(id), (error, results) => {
      if (error) return responseError(res, error);
      else responseSuccess(res, results);
    });
  }

  async createTask(req, res) {
    const { id } = req.params;
    const { summary, performed } = req.body;
    const notification = `The tech ${id} performed the task ${summary} on date ${performed}`;

    await connection.query(
      sql.technician.createTask(summary, performed, id),
      (error, results) => {
        if (!summary || !performed)
          return responseError(res, "Field missing", 400);
        else if (error) return responseError(res, error);
        else {
          responseSuccess(res, `Task created for technician ${id}`, 201);
          publisher.publish("managerNotifications", notification);
        }
      }
    );
  }

  async updateTask(req, res) {
    const { idTechnician, idTask } = req.params;
    const { summary, performed } = req.body;

    await connection.query(
      sql.technician.updateTask(idTechnician, idTask, summary, performed),
      (error, results) => {
        if (!summary || !performed)
          return responseError(res, "Field missing", 400);
        else if (error) return responseError(res, error);
        else
          responseSuccess(
            res,
            `Task ${idTask} updated for technician ${idTechnician}`
          );
      }
    );
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
