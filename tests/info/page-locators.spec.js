import { expect, test } from '@playwright/test'
// recomended buit-in locators:
test('Built-in locators', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    // by id > #
    await page.locator("#full-name").fill("RCV JVT Academy");
    // by name
    await page.locator('[name="email"]').fill("emailJVT@academy.ba");
    // by attribute
    await page.locator('[type="tel"]').fill("+370123456789");
    // by classname
    await page.locator('.form-control').fill("emailJVT@academy.ba");
    await page.locator('[class="btn btn-primary"]').click();
    // by tagname > input
    await page.locator('input').fill("JVT academy");
    // combine multiple locators
    await page.locator('input[aria-label="Password"][data-testid="reg-password-input"]').fill("JVT123456789");
    // Partial text match
    await page.locator(':text("Subscribe")').click();
    // Full text match
    await page.locator(':text-is("Subscribe to newsletter")').click();
    // BY Xpath  >inspect > copy xpath >ctrl F> paste>    //*[@id="confirm-password"]
    await page.locator('//*[@id="confirm-password"]').fill("JVT123456789");
    // BY CCS selector  >inspect > copy ccs selector  >ctrl F> paste>  #terms//*[@id="confirm-password"]
    await page.locator('#terms//*[@id="confirm-password"]').click();


})

