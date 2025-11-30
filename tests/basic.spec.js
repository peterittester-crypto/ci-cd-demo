import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://peterhosting1411.web.app');
  await expect(page).toHaveTitle(/CI\/CD Demo Page/);
});