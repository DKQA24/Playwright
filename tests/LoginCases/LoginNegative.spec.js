const {test, expect}=require('@playwright/test');
require('dotenv').config();


test('No email & Password', async ({page})=>{

    await page.goto(process.env.BASE_URL);
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await expect(page).toHaveTitle(/OSL 2.0/);
    await  page.locator("[type='submit']").click();
    
    await expect(page.getByText('Enter a valid email')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();

    const err1= await page.getByText('Enter a valid email');
    console.log(await err1.innerText());

    const err2= await page.getByText('Password is required');
    console.log(await err2.innerText());
    
   

});

test('Email without Password', async ({page})=>{

    await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await expect(page).toHaveTitle(/OSL 2.0/);
    await  page.locator("[type='email']").fill('dilawar.khanon1@gmail.com');
    await  page.locator("[type='submit']").click();
    await expect(page.getByText('Password is required')).toBeVisible();
    
    const errText = await page.getByText('Password is required');   
    console.log(await errText.innerText());
    

});

test('Password without email', async ({page})=>{

    await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await expect(page).toHaveTitle(/OSL 2.0/);


    
    await page.getByTestId('login-password-input-field').fill('Axio2007!@#');
    await  page.locator("[type='submit']").click();
    await expect(page.getByText('Enter a valid email')).toBeVisible();
  
    const errText = await page.getByText('Enter a valid email');   
    console.log(await errText.innerText());

});

test('Valid email with invalid password', async ({page})=>{

    await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await expect(page).toHaveTitle(/OSL 2.0/);


    
    await  page.locator("[type='email']").fill('dilawar.khanon1@gmail.com');
    await page.getByTestId('login-password-input-field').fill('Axio2007');
    await  page.locator("[type='submit']").click();
    
    await expect(page.getByTestId('login-error-alert')).toBeVisible();


    const errText = await page.locator('[data-testid="login-error-alert"]').innerText();
    console.log(errText);
  

});

test('Non Registered User', async ({page})=>{

    

    await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await expect(page).toHaveTitle(/OSL 2.0/);


    
    await  page.locator("[type='email']").fill('dilawar.khanon1+abc@gmail.com');
    await page.getByTestId('login-password-input-field').fill('Axio2007');
    await  page.locator("[type='submit']").click();
    
    await expect(page.getByTestId('login-error-alert')).toBeVisible();

  
    const errText = await page.locator('[data-testid="login-error-alert"]').innerText();
    console.log(errText);

});

 test.skip('None Active account', async ({page})=>{

   
   await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
     await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
   await expect(page).toHaveTitle(/OSL 2.0/);


    
   await  page.locator("[type='email']").fill(process.env.EMAIL2);
   await page.getByTestId('login-password-input-field').fill('Axio2007');
   await  page.locator("[type='submit']").click();
   await expect(page.getByTestId('login-error-alert')).toBeVisible();

  const errText = await page.locator('[data-testid="login-error-alert"]').innerText();
     console.log(errText);

 });

  test.skip('Retry', async ({page})=>{

   
   await page.goto("https://app-development.onestream.live/login");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
     await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
   await expect(page).toHaveTitle(/OSL 2.0/);


    
   await  page.locator("[type='email']").fill('dilawar.khanon1@gmail.com');
   await page.getByTestId('login-password-input-field').fill('Axio2007!@#$%');
   await  page.locator("[type='submit']").click();
   await expect(page.getByTestId('login-error-alert')).toBeVisible();

  const errText = await page.locator('[data-testid="login-error-alert"]').innerText();
     console.log(errText);

 });






