const {test, expect}=require('@playwright/test');
require('dotenv').config();

test('test 1', async ({page}) => {


await page.goto(process.env.BASE_URL);

   await page.getByRole('button', { name: 'Accept all cookies' }).click();
   await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
   await expect(page).toHaveTitle(/OSL 2.0/);

 

   await  page.locator("[type='email']").fill(process.env.EMAIL);
   await page.getByTestId('login-password-input-field').fill(process.env.PASSWORD);
   await page.getByRole('checkbox').check();
   await  page.locator("[type='submit']").click();
   await expect(page).toHaveURL('https://app-development.onestream.live/'); 
   await page.waitForTimeout(5000);





});

test('test 2', async ({page}) => {


    
});