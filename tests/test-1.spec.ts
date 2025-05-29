import { test, expect } from '@playwright/test';

test('Проверка видимости элементов в хедере', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/');
  await expect.soft(page.getByRole('banner').getByRole('link', { name: 'conduit' })).toBeVisible();
  await expect
    .soft(page.getByRole('banner').getByRole('link', { name: 'Source code' }))
    .toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Login' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});
