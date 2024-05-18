import {test, expect} from '@playwright/test';

test('Page demo', async ({page}) => {
    // arrange
    await page.goto('https://google.com');
    // act
    const input = page.locator('[title="Search"]');
    await input.fill('Playwright');
    // await input.type('Playwright', { delay: 10 });
    await input.press('Enter');
    // assert
    await expect(page).toHaveTitle('Playwright - Google Search');
    // await expect(page).toHaveTitle(/Playwright/);
})