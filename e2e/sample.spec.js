const { test, expect } = require('@playwright/test');

/**
 * Sample Playwright Test
 * Demonstrates basic Playwright testing patterns and best practices
 */
test.describe('Sample Playwright Test', () => {
  // Setup: Navigate to the Playwright website before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('should navigate to Playwright website and verify title', async ({ page }) => {
    // Verify the page title contains "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should find and interact with the Get Started link', async ({ page }) => {
    // Find the "Get started" link and click it
    await page.getByRole('link', { name: 'Get started' }).click();

    // Verify navigation to the installation page
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('should verify page has expected content', async ({ page }) => {
    // Verify the H1 is visible and contains the expected partial text
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Playwright enables reliable');
  });
});
