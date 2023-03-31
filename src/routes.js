const routes = require("express").Router();
const ControllerManager = require("./controllers/controllerManager");
const controllerTechnician = require("./controllers/controllerTechnician");

// POST creation
routes.post("/manager", ControllerManager.createManager);
routes.post("/technician");

// GET read all
routes.get("/manager", ControllerManager.listManager);
routes.get("/technician");

module.exports.routes = routes;
