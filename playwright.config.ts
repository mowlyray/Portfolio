import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  // Small smoke suite sharing one dev server — serial avoids Turbopack
  // cold-compile contention across workers flaking first-navigation assertions.
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  // Generous headroom for Turbopack's on-demand dev compile of a route's
  // first hit, which can occasionally exceed the 5s default assertion timeout.
  expect: { timeout: 15 * 1000 },

  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
