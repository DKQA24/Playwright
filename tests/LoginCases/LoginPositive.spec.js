const {test, expect}=require('@playwright/test');
//const modifiedEmail = require('../CustomCode/Email');

test('Login with Valid Credentials ', async ({page})=>{

   await page.goto("https://app-development.onestream.live/login");
   await page.getByRole('button', { name: 'Accept all cookies' }).click();
   await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
   await expect(page).toHaveTitle(/OSL 2.0/);

 

   await  page.locator("[type='email']").fill('dilawar.khanon1@gmail.com');
   await page.getByTestId('login-password-input-field').fill('Axio2007!@');
   await page.getByRole('checkbox').check();
   await  page.locator("[type='submit']").click();
   await expect(page).toHaveURL('https://app-development.onestream.live/'); 
   await page.waitForTimeout(5000);


});