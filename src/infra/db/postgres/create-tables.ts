import { pool } from "./client";

const createTables = async () => {
  await pool.query(`
  CREATE TABLE IF NOT EXISTS shortened_urls (
    id SERIAL PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_url TEXT NOT NULL UNIQUE,
    clicks INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);
};

export default createTables;
