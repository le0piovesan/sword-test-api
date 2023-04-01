const routes = require("express").Router();
const ControllerManager = require("./controllers/controllerManager");
const ControllerTechnician = require("./controllers/controllerTechnician");
const ControllerTask = require("./controllers/controllerTask");

// Admin sample routes
routes.post("/manager", ControllerManager.createManager);
routes.post("/technician", ControllerTechnician.createTechnician);
routes.post("/task", ControllerTask.createTask);
routes.get("/manager", ControllerManager.listAllManagers);
routes.get("/technician", ControllerTechnician.listAllTechnicians);
routes.get("/task", ControllerTask.listAllTasks);

module.exports.routes = routes;
