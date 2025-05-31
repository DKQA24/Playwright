const {test, expect}=require('@playwright/test');

require('dotenv').config();


test('Signup ', async ({page})=>
{

   
    await page.goto("https://app-development.onestream.live/login");

    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await page.getByRole('Link', { name: 'Sign Up' }).click();

await expect(page).toHaveURL(/.*signup/);
await expect(page).toHaveTitle(/OSL 2.0/);

//await page.getByRole('button', { name: 'en' }).click();  // this is to click on language selector drop down
//await expect(page).get('button',{name:'en'}).toBeVisible();

await expect(page.getByTestId('google-sso-button', { name: 'google-icon' })).toBeVisible();
await expect(page.getByTestId('facebook-sso-button', { name: 'facebook-icon' })).toBeVisible();
await expect(page.getByTestId('twitch-sso-button', { name: 'twitch-icon' })).toBeVisible();
await expect(page.getByTestId('apple-sso-button', { name: 'apple-icon' })).toBeVisible();


await expect(page.getByRole('link', { name: 'Terms' })).toBeVisible();
await expect(page.getByRole('link', { name: 'privacy' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Join Our Community' })).toBeVisible();



    
    await page.getByTestId('signup-name-input-field').fill('Dilawar Khan');
    await page.getByTestId('signup-email-input-field').fill(process.env.EMAIL2);
    await page.getByTestId('signup-password-input-field').fill('Axio2007!#');
    await page.getByRole('checkbox').check();
    await page.getByText('Sign Up').click();
    await page.waitForTimeout(3000); // waits for 5 seconds

    
    
    await page.waitForTimeout(3000); 

});


