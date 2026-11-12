//@ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

// needed for .env files to process
const envFile = `.env.${process.env.TEST_ENV || 'dev'}`

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  dotenv.config();
}

export default defineConfig({
  testDir: './tests',
  // workers are test number > fullyParallel true > every test run as separate worker, if 
  // false . need to setup workers
  fullyParallel: false,
  // workers can be 1, 2, 3
  workers: 1,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports' }]
  ],
  // reporter: process.env.CI ? 'github' : 'html',
  timeout: 30000,
  // haw many times ti retry 1 , 2 or 3
  retries: 1,
  expect: {
    timeout: 10000,
  },

  // for all projects
  use: {
    // trace: 'retain-on-first-retry',
    trace: 'retain-on-first-failure',
    browserName: 'chromium',
    headless: true,
    locale: 'en-US',
    timezoneId: 'America/Los_Angeles',
    colorScheme: 'light',
    ignoreHTTPSErrors: true,
    screenshot: 'on-first-failure',
    video: 'on-first-retry'
  },
  projects: [
    {
      // specific project
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        // viewport: { width: 200, height: 100 },
        // Emulation options at www.playwright.com
        locale: 'en-US',
        timezoneId: 'America/Los_Angeles',
        colorScheme: 'dark',
        ignoreHTTPSErrors: false
      }
    },
    // įjungti testus kitose naršyklėse > npx playwright test order-history-and-tracking  --project='safari'
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     // headless: false,
    //   }
    // },
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
      }
    },


    // įjungti testus mobiliųjų telefonų atvaizdavime > 
    // npx playwright test --project="iPhone15-pro-landscape" -g "Serial tests"
    // npx playwright test order-history-and-tracking  --project='iPhone15-pro-landscape'

    {
      name: 'iPhone15-pro-landscape',
      use: {
        ...devices['iPhone 15 Pro landscape'],
        headless: false,
      }
    }
  ]
});


// // @ts-check
// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   fullyParallel: true,
//   reporter: 'html',
//   timeout: 45000, 
//   expect: {
//     timeout:10000,
//   },
//   use: {
//     trace: 'on-first-retry',
//     browserName: 'chromium',
//     headless: false,
//   },
// });


// require('dotenv').config();


// import { defineConfig } from '@playwright/test';
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//     testDir: './tests',
//     fullyParallel: true,
//     reporter: 'html',
//     timeout: 45000,

//     expect: {
//         timeout: 10000,
//     },

//     use: {
//         trace: 'on-first-retry',
//         browserName: 'chromium',
//         headless: false,
//     },
// });


/* Configure projects for major browsers */
// projects: [
//   {
//     name: 'chromium',
//     use: { ...devices['Desktop Chrome'] },
//   },

//   {
//     name: 'firefox',
//     use: { ...devices['Desktop Firefox'] },
//   },

//   {
//     name: 'webkit',
//     use: { ...devices['Desktop Safari'] },
//   },

//   /* Test against mobile viewports. */
//   // {
//   //   name: 'Mobile Chrome',
//   //   use: { ...devices['Pixel 5'] },
//   // },
//   // {
//   //   name: 'Mobile Safari',
//   //   use: { ...devices['iPhone 12'] },
//   // },

//   /* Test against branded browsers. */
//   // {
//   //   name: 'Microsoft Edge',
//   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//   // },
//   // {
//   //   name: 'Google Chrome',
//   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//   // },
// ],

/* Run your local dev server before starting the tests */
// webServer: {
//   command: 'npm run start',
//   url: 'http://localhost:3000',
//   reuseExistingServer: !process.env.CI,
// },

