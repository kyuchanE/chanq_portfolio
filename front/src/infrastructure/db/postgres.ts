import "server-only";
import { Pool } from "pg";

declare global {
  var __pgPool__: Pool | undefined;
}

function getConnectionString() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  return connectionString;
}

export function getPgPool() {
  if (global.__pgPool__) {
    return global.__pgPool__;
  }

  const pool = new Pool({
    connectionString: getConnectionString(),
  });

  if (process.env.NODE_ENV !== "production") {
    global.__pgPool__ = pool;
  }

  return pool;
}
