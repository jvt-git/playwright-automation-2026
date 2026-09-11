import { expect, test } from '@playwright/test'
// recomended buit-in locators:
test('Built-in locators', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    await page.getByRole("textbox").first().fill('RCV Academy');
    await page.getByText("Other / Prefer not to say").click();
    await page.getByLabel("Email Address").fill("adminJVT@acadymy.com");
    await page.getByPlaceholder("Choose a username").fill("JVTacademy");
    await page.getByAltText("Software Testing Mentor").click();
    await page.getByText('Register Page').first().click();
    await page.getByTitle("YouTube - STM").click();
    await page.getByTestId("header-linkedin").click();

})

