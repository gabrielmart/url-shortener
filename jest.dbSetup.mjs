const { pool } = require("./src/infra/db/postgres/client");
const createTablesModule = require("./src/infra/db/postgres/create-tables");

const createTables = createTablesModule.default || createTablesModule;

beforeAll(async () => {
  await createTables();
});

beforeEach(async () => {
  await pool.query(`
    DO $$ DECLARE
        r RECORD;
    BEGIN
        EXECUTE 'SET session_replication_role = replica';

        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
            EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' RESTART IDENTITY CASCADE';
        END LOOP;

        EXECUTE 'SET session_replication_role = DEFAULT';
    END $$;
  `);
});

afterAll(async () => {
  if (!pool.ended) {
    await pool.end();
  }
});
