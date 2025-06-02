const { test, expect } = require('@playwright/test');
require('dotenv').config();



test('Navigation & Assertion of`  Social Platforms', async ({ page }) => {
  

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

  // Debug: Check if the platform exists
  const platformCount = await page.locator('[data-testid="platform-Custom"]').count();
  console.log('platform-Custom count:', platformCount);

  await expect(page.locator('[data-testid="platform-Custom"]').first()).toBeVisible({ timeout: 10000 });
  await page.locator('[data-testid="platform-Custom"]').first().click();

  // Optionally, close the modal after clicking
  // await page.getByTestId('social-platform-list-modal-close-button').click();

  
});