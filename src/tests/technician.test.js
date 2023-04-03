const request = require("supertest");
const app = require("../index");
const { connection } = require("../configs/mysqlConfig");
require("dotenv").config({ path: "src/configs/.env" });
const { init } = require("../database/init");

// Config
beforeAll(async () => {
  await connection.query(init.useDb);
});

// Technician
describe("GET /technician/:id/getTasks", () => {
  describe("given the id of a technician", () => {
    test("should respond with a 200 status code", async () => {
      const idTechnician = 3;

      const response = await request(app).get(
        `/technician/${idTechnician}/getTasks`
      );
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
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
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    describe("given the id of a technician, a summary but missing a performed date", () => {
      test("should respond with a 400 status code", async () => {
        const idTechnician = 3;

        const response = await request(app)
          .post(`/technician/${idTechnician}/createTask`)
          .send({
            summary: "Deployed the app",
          });
        expect(response.statusCode).toBe(400);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
    });
  });
});

describe("PUT /technician/:idTechnician/task/:idTask/updateTask", () => {
  describe("given the id of a technician, id of a task, a summary and performed date", () => {
    test("should respond with a 200 status code", async () => {
      const idTechnician = 3;
      const idTask = 4;

      const response = await request(app)
        .put(`/technician/${idTechnician}/task/${idTask}/updateTask`)
        .send({
          summary: "Designed a mobile app",
          performed: "2023-02-15",
        });
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    describe("given the id of a technician, a performed data but missing a summary", () => {
      test("should respond with a 400 status code", async () => {
        const idTechnician = 3;
        const idTask = 4;

        const response = await request(app)
          .put(`/technician/${idTechnician}/task/${idTask}/updateTask`)
          .send({
            performed: "2023-02-15",
          });
        expect(response.statusCode).toBe(400);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
    });
  });
});

afterAll(() => connection.end());
