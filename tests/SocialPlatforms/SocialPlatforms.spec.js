const {test, expect}=require('@playwright/test');
require('dotenv').config();



test('test 2', async ({page}) => {

   
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

// Navigate to Social Platforms
const items = page.locator('[data-testid="sidebar-navigation-item-button"]');

await items.nth(4).click();  
await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://app-development.onestream.live/social-platforms');
    await expect(page.getByRole('heading', { name: 'Social Platforms' })).toBeVisible();
    await expect(page.getByTestId('add-platform-button')).toBeVisible();
    await page.getByTestId('add-platform-button').click();
    await page.waitForTimeout(5000);
    await expect(page.getByRole('heading', { name: ' Add Platform' })).toBeVisible();
    await page.waitForTimeout(5000);
   await expect(page.getByTestId('social-platform-list-modal-search-input')).toBeVisible();
    await expect(page.getByTestId('social-platform-list-modal-close-button')).toBeVisible();
    //await page.getByTestId('social-platform-list-modal-close-button').click();
   await page.waitForTimeout(5000);

   await expect(page.locator('[data-testid="platform-Custom"]').first()).toBeVisible();
await page.locator('[data-testid="platform-Custom"]').first().click();
await page.waitForTimeout(5000);

 

    
});