import request from "supertest";
import app from "../app";

beforeAll(async () => {
  await app.ready(); // espera o Fastify estar pronto
});

afterAll(async () => {
  await app.close(); // fecha o app depois dos testes
});

describe("GET /health", () => {
  it("should return 200 and status ok", async () => {
    const response = await request(app.server).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});
