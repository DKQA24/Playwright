const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://app-development.onestream.live/login');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
  await page.locator('[type="email"]').fill('dilawar.khanon1@gmail.com');
  await page.getByTestId('login-password-input-field').fill('Axio2007!@');
  await page.getByRole('checkbox').check();
  await page.locator('[type="submit"]').click();
  await page.waitForURL('https://app-development.onestream.live/');

  await page.context().storageState({ path: 'user.json' });
  
};