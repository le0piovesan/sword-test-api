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
      const idManager = 1;

      const response = await request(app).get(
        `/manager/${idManager}/getAllTechniciansTasks`
      );
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  describe("misspeling the route without the id of a manager", () => {
    test("should return a not found 404 status code", async () => {
      const idManager = 1;

      const response = await request(app).get(
        `/manager/getAllTechniciansTasks`
      );
      expect(response.statusCode).toBe(404);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("html")
      );
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
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

afterAll(() => connection.end());
