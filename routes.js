const routes = require("express").Router();

// POST creation
routes.post("/manager");
routes.post("/technician");

// GET read all
routes.get("/manager");
routes.get("/technician");

module.exports.routes = routes;
