const routes = require("express").Router();
const ControllerManager = require("./controllers/controllerManager");
const ControllerTechnician = require("./controllers/controllerTechnician");
const ControllerTask = require("./controllers/controllerTask");

// Manager routes
//  The manager can see tasks from all the technicians, delete them, and should be notified when some tech performs a task
routes.get(
  "/manager/getTechnicianTasks/:id",
  ControllerManager.getTechnicianTasks
);
routes.delete("/manager/technician/:id", ControllerManager.deleteTechnician);

// Admin sample routes
routes.post("/manager", ControllerManager.createManager);
routes.post("/technician", ControllerTechnician.createTechnician);
routes.post("/task", ControllerTask.createTask);
routes.get("/manager", ControllerManager.listAllManagers);
routes.get("/technician", ControllerTechnician.listAllTechnicians);
routes.get("/task", ControllerTask.listAllTasks);

module.exports.routes = routes;
