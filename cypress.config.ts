import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
export default defineConfig({
  env: {
    user: {
      email: "autotest@gmail.com",
      password: process.env.autotestPassword,
    },
  },

  e2e: {
    baseUrl: "http://localhost",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.taskTimeout = 8000;
      return config;
    },
  },
});
