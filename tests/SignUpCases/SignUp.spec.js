const { test, expect } = require('@playwright/test');
const email = require('../../CustomCode/Email.js');

const { getVerificationCode } = require('./MailPit.js');
test('Signup', async ({ page }) => {
  await page.goto("https://app-development.onestream.live/login");
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
  await page.getByRole('Link', { name: 'Sign Up' }).click();

  await expect(page).toHaveURL(/.*signup/);
  await expect(page).toHaveTitle(/OSL 2.0/);

  await expect(page.getByTestId('google-sso-button', { name: 'google-icon' })).toBeVisible();
  await expect(page.getByTestId('facebook-sso-button', { name: 'facebook-icon' })).toBeVisible();
  await expect(page.getByTestId('twitch-sso-button', { name: 'twitch-icon' })).toBeVisible();
  await expect(page.getByTestId('apple-sso-button', { name: 'apple-icon' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Terms' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'privacy' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Join Our Community' })).toBeVisible();

  await page.getByTestId('signup-name-input-field').fill('Dilawar Khan');
  await page.getByTestId('signup-email-input-field').fill(email);
    
    const fs = require('fs');
    // ... after you define or use 'email'
    fs.writeFileSync('used_email.txt', email);

  await page.getByTestId('signup-password-input-field').fill('Axio2007!#');
  await page.getByRole('checkbox').check();
  await page.getByText('Sign Up').click();
  await page.waitForTimeout(3000);

  // Get the verification code from MailPit
  const code = await getVerificationCode();
  console.log('Extracted code:', code);

  
  
for (let i = 0; i < code.length; i++) {
  await page.getByRole('textbox', { name: `Digit ${i + 1}` }).fill(code[i]);
}
  await page.waitForTimeout(3000);

  await expect(page.getByTestId('modal-confirm-button')).toBeVisible();
  await page.getByTestId('modal-confirm-button').click();
 
   await expect(page).toHaveURL('https://app-development.onestream.live/');
     await page.waitForTimeout(5000);


////////////////////////////////////

     
});