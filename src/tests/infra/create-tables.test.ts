import { pool } from "../../infra/db/postgres/client";
import createTables from "../../infra/db/postgres/create-tables";

describe("createTables", () => {
  beforeAll(async () => {
    await pool.query(`DROP TABLE IF EXISTS shortened_urls`);
  });

  afterAll(async () => {
    await pool.query(`DROP TABLE IF EXISTS shortened_urls`);
    pool.end();
  });

  it("should create the shortened urls table", async () => {
    await createTables();

    const response = await pool.query(`
      SELECT to_regclass('public.shortened_urls') as table_name
  `);

    expect(response.rows[0].table_name).toBe("shortened_urls");
  });
});
