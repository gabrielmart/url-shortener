/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src/tests"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["**/*.test.ts"],
  setupFiles: ["<rootDir>/jest.envSetup.js"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};

export default config;
