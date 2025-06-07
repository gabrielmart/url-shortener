declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: "development" | "production" | "test";

    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;

    LOG_LEVEL?: "debug" | "info" | "warn" | "error";
  }
}
