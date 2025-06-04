const { test, expect } = require('@playwright/test');
require('dotenv').config();
test.use({ storageState: 'user.json' }); // user session management is limited to this test file only


test('Navigation & Assertion of Social Platforms', async ({ page }) => {
  
const modal = page.getByTestId('dialog-content');
  await page.goto('https://app-development.onestream.live/');
  await expect(page).toHaveURL('https://app-development.onestream.live/');

  // Navigate to Social Platforms
  const items = page.locator('[data-testid="sidebar-navigation-item-button"]');
  await items.nth(4).click();

  await expect(page).toHaveURL('https://app-development.onestream.live/social-platforms');
  await expect(page.getByRole('heading', { name: 'Social Platforms' })).toBeVisible();
  await expect(page.getByTestId('add-platform-button')).toBeVisible();
  await page.getByTestId('add-platform-button').click();

  await expect(page.getByRole('heading', { name: ' Add Platform' })).toBeVisible();
  await expect(page.getByTestId('social-platform-list-modal-search-input')).toBeVisible();
  await expect(page.getByTestId('social-platform-list-modal-close-button')).toBeVisible();

  

  await expect(page.locator('[data-testid="platform-Custom"]').first()).toBeVisible({ timeout: 10000 });
  await page.locator('[data-testid="platform-Custom"]').first().click();

  //await expect(page.getByRole('heading', { name: 'Connect Custom RTMP' })).toBeVisible();
  //const modal = page.getByRole('dialog'); // or use a more specific locator if available
  
  await expect(modal.getByRole('img', { name: 'Custom' })).toBeVisible();
  
  // Optionally, close the modal after clicking
  // await page.getByTestId('social-platform-list-modal-close-button').click();
  await expect(modal.getByText('Account Name')).toBeVisible();
  await expect(page.getByTestId('rtmp-account-name-input')).toBeVisible();
  await page.getByTestId('rtmp-account-name-input').fill('Test Custom RTMP Account');
  await page.waitForTimeout(5000);

  await expect(modal.getByText('Server URL')).toBeVisible();
  await expect(page.getByTestId('rtmp-server-url-input')).toBeVisible();
  await page.getByTestId('rtmp-server-url-input').fill('rtmp://example.com/live');
  await page.waitForTimeout(5000);

  await expect(modal.getByText('Stream Key')).toBeVisible();
  await expect(page.getByTestId('rtmp-stream-key-input')).toBeVisible();
  await page.getByTestId('rtmp-stream-key-input').fill('exampleStreamKey1122334455');
  await page.waitForTimeout(5000);
  
//dialog-content << test id for modal
  await expect(modal.getByRole('button', { name: 'Connect' })).toBeVisible();

  await page.getByRole('button', { name: 'Connect' }).click();
await page.waitForTimeout(5000);
  
});