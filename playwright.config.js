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


  },

  



});

module.exports = config;

