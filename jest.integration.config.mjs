const config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  roots: ["./src/tests"],
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["**/*.spec.ts"],
  setupFiles: ["<rootDir>/jest.envSetup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.dbSetup.mjs"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default config;
