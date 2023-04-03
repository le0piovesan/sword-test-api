const request = require("supertest");
const app = require("../index");
const { connection } = require("../configs/mysqlConfig");
require("dotenv").config({ path: "src/configs/.env" });
const { init } = require("../database/init");

// Config
beforeAll(async () => {
  await connection.query(init.useDb);
});

// Manager
describe("GET /manager/:id/getAllTechniciansTasks", () => {
  describe("given the id of a manager", () => {
    test("should return a 200 status code", async () => {
      const idManager = 3;

      const response = await request(app).get(
        `/manager/${idManager}/getAllTechniciansTasks`
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("DELETE /technician/:idTechnician/task/:idTask/deleteTechnicianTask", () => {
  describe("given the id of a technician and a id of a task", () => {
    test("should return a 200 status code", async () => {
      const idTechnician = 5;
      const idTask = 7;

      const response = await request(app).delete(
        `/technician/${idTechnician}/task/${idTask}/deleteTechnicianTask`
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

// Technician
describe("GET /technician/:id/getTasks", () => {
  describe("given the id of a technician", () => {
    test("should respond with a 200 status code", async () => {
      const idTechnician = 2;

      const response = await request(app).get(
        `/technician/${idTechnician}/getTasks`
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("POST /technician/:id/createTask", () => {
  describe("given the id of a technician, a summary and performed date", () => {
    test("should respond with a 201 status code", async () => {
      const idTechnician = 3;

      const response = await request(app)
        .post(`/technician/${idTechnician}/createTask`)
        .send({
          summary: "Deployed the app",
          performed: "2023-03-05",
        });
      expect(response.statusCode).toBe(201);
    });
  });
});

describe("PUT /technician/:idTechnician/task/:idTask/updateTask", () => {
  describe("given the id of a technician, id of a task, a summary and performed date", () => {
    test("should respond with a 200 status code", async () => {
      const idTechnician = 5;
      const idTask = 7;

      const response = await request(app)
        .put(`/technician/${idTechnician}/task/${idTask}/updateTask`)
        .send({
          summary: "Deployed the app",
          performed: "2023-03-05",
        });
      expect(response.statusCode).toBe(200);
    });
  });
});
