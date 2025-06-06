import Fastify from "fastify";

const app = Fastify();

app.get("/health", async (_request, _reply) => {
  return { status: "ok" };
});

export default app;
