import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Playwright Library');
});
