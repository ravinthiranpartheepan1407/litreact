import {PlaywrightTestConfig, devices} from '@playwright/test';

const config: playwrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-try',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},

    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox']},
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari']},
    },
  ],
};

export default config;
