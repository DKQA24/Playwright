const {test, expect}=require('@playwright/test');
const { getVerificationCode } = require('./MailPit.js');


test('Forgot Password ', async ({page})=>{

   await page.goto("https://app-development.onestream.live/login");
   await page.getByRole('button', { name: 'Accept all cookies' }).click();
   await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
   await expect(page).toHaveTitle(/OSL 2.0/);
await page.waitForTimeout(5000);
 
   await expect (page.getByTestId('login-forgot-password-link')).toBeVisible();    
    await page.getByTestId('login-forgot-password-link').click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveURL('https://app-development.onestream.live/forget-password'); 



    await expect (page.getByAltText('OneStream Logo')).toBeVisible();
///////////////////////////
      const fs = require('fs');
const email = fs.readFileSync('used_email.txt', 'utf-8');

/////////////////DILAWAR KHAN


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
  console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}

/////



    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    await page.getByPlaceholder('Create a new password').fill('2007Axio!#');
    await page.getByPlaceholder('Re-enter new password').fill('2007Axio!#');
    await page.getByRole('button', { name: 'Reset Password' }).click();

  await page.waitForTimeout(5000);
  expect(page).toHaveURL('https://app-development.onestream.live/login');


});