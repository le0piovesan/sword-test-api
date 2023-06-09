const { responseSuccess, responseError } = require("../utils/response");
const { connection } = require("../configs/mysqlConfig");
const { sql } = require("../database/sql");
const { createClient } = require("redis");
const client = createClient({
  url: "redis://redis:6379",
});
const subscriber = client.duplicate();

subscriber.connect();

// Receives the notification when a technician performs a task
subscriber.subscribe("managerNotifications", (message) => {
  console.log(message);
});

class ControllerManager {
  async getAllTechniciansTasks(req, res) {
    const { id } = req.params;

    await connection.query(
      sql.manager.getAllTechniciansTasks(id),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, results);
      }
    );
  }

  async deleteTechnicianTask(req, res) {
    const { idTechnician, idTask } = req.params;

    await connection.query(
      sql.manager.deleteTechnicianTask(idTechnician, idTask),
      (error, results) => {
        if (error) return responseError(res, error);
        else responseSuccess(res, `Task with id ${idTask} deleted`);
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
