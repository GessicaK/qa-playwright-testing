import { test } from '@playwright/test';

test('Google search for QA jobs', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await page.getByRole('combobox', { name: /search/i }).fill('QA Engineer Malaysia');

  await page.getByRole('combobox', { name: /search/i }).press('Enter');

  await page.pause();
});