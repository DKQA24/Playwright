const {test, expect}=require('@playwright/test');
const { getVerificationCode } = require('./MailPit.js');


test('No Passwords', async ({page})=>{

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

//////////////


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

    await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
 // console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}

/////



    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    //await page.getByPlaceholder('Create a new password').fill('2007Axio!#');
    //await page.getByPlaceholder('Re-enter new password').fill('2007Axio!#');
    await page.getByRole('button', { name: 'Reset Password' }).click();

   // await expect(page.getByText('Password is required')).toBeVisible();
     //const err= await page.getByText('Password is required');
    //console.log(await err.innerText());

      const err1 = page.getByText('Password is required');
  await err1.nth(0).isVisible();
  console.log(await err1.nth(1).innerText());

  const err2 = page.getByText('Password is required');
  await err2.nth(1).isVisible();
  console.log(await err2.nth(1).innerText());


  await page.waitForTimeout(5000);
  


});

test('Passwords not match', async ({page})=>{

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

//////////////


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

    await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
 // console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}

/////



    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    await page.getByPlaceholder('Create a new password').fill('2007Axio!#');
    await page.getByPlaceholder('Re-enter new password').fill('Axio2007!@#');
    await page.getByRole('button', { name: 'Reset Password' }).click();

   



 const err3 = page.getByText('Passwords do not match');
await expect(err3).toBeVisible();
console.log(await err3.innerText());


  await page.waitForTimeout(5000);
  


});

test('Required Password Length', async ({page})=>{

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

//////////////


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

    await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
 // console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}

/////



    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    await page.getByPlaceholder('Create a new password').fill('2007');
    await page.getByPlaceholder('Re-enter new password').fill('2007');
    await page.getByRole('button', { name: 'Reset Password' }).click();

   



 const err3 = page.getByText('Password must be 3-15 characters including 1 number, 1 special character (!, @, #, $)');
await expect(err3).toBeVisible();
console.log(await err3.innerText());


  await page.waitForTimeout(5000);
  


});

test('Password Length', async ({page})=>{

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

//////////////


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

    await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
 // console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}

/////



    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    await page.getByPlaceholder('Create a new password').fill('Ab');
    await page.getByPlaceholder('Re-enter new password').fill('Ab');
    await page.getByRole('button', { name: 'Reset Password' }).click();

   



 const err3 = page.getByText('Password must be 3-15 characters');
await expect(err3).toBeVisible();
console.log(await err3.innerText());


  await page.waitForTimeout(5000);
  


});

test.only('Invalid Code', async ({page})=>{

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

//////////////


    await page.getByTestId('forget-password-email-input-field').fill(email);
    await page.getByTestId('forget-password-submit-btn').click();

    await page.waitForTimeout(5000);
    const code = await getVerificationCode(email);
 // console.log('Extracted code:', code);


const invalidCode = "123456"; // any 6-digit code you know is invalid

for (let i = 0; i < invalidCode.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(invalidCode[i]);
}
await page.waitForTimeout(3000);

////



const err = page.getByText('Invalid verification code');
   await expect(err).toBeVisible();           
    console.log(await err.innerText());    

    await expect(page.getByTestId('verification-resend-button')).toBeVisible();


    await expect(page.getByTestId('verify-contact-support-btn')).toBeVisible();
    await expect(page.getByAltText('OneStream Logo')).toBeVisible();
    await expect(page.getByText('Reset Password')).toBeVisible();

    

   



  


});