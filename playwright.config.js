// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';





/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
testMatch: '**/*.spec.js',
  timeout: 90*1000,
 
  reporter :'html',
  use: {
    
  
   browserName : 'chromium', // for running test in chrome
    viewport: null,
     launchOptions: {                     //to meximize the browser window
      args: ['--start-maximized'], // Maximize browser window
    },
   //headless: false // this control to wether run test in headless or headed mode based on the true, false value
    
  //browserName : 'firefox' // for running test in firefox
  
  //browserName: 'webkit' // for safari browser

// storageState: 'user.json', //uncomment this line to use the storage state file for authentication in all test files

  },

 // globalSetup: require.resolve('./global-setup.js'), // Path to your global setup file



});

module.exports = config;

