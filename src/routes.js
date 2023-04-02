const routes = require("express").Router();
const ControllerManager = require("./controllers/controllerManager");
const ControllerTechnician = require("./controllers/controllerTechnician");
const ControllerTask = require("./controllers/controllerTask");

// Manager routes
// The manager can see tasks from all the technicians and delete them

routes.get(
  "/manager/:id/getAllTechniciansTasks/",
  ControllerManager.getAllTechniciansTasks
);
routes.delete(
  "/technician/:idTechnician/task/:idTask/deleteTechnicianTask",
  ControllerManager.deleteTechnicianTask
);

// Technician/Task routes
// The technician performs tasks and is only able to see, create or update his own performed tasks
// Manager should be notified when some tech performs a task

// routes.get("/technician/:id/getTasks/", ControllerTechnician.getTasks);
// routes.post("/technician/:id/createTask/", ControllerTechnician.createTask);
// routes.put(
//   "/technician/:id/updateTask/:idTask",
//   ControllerTechnician.updateTask
// );

// Admin sample routes for TESTING
routes.post("/manager", ControllerManager.createManager);
routes.post("/technician", ControllerTechnician.createTechnician);
routes.post("/task", ControllerTask.createTask);
routes.get("/manager", ControllerManager.listAllManagers);
routes.get("/technician", ControllerTechnician.listAllTechnicians);
routes.get("/task", ControllerTask.listAllTasks);

module.exports.routes = routes;
