import { expect, test } from '@playwright/test'

test.only('My first test case', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Login Page').first().click();
    await page.getByPlaceholder('Enter your username').fill('admin');
    await expect(page).toHaveTitle('Automation Practice Website | Software Testing Mentor & RCV Academy');
})

test('test case with browsercontext', async ({ browser }) => {
    // browser.newContext -> sukuria naują naršyklės kontekstą (Browser Context). 
    // Tarsi atskiras, švarus naršyklės profilis – su savo slapukais, sesija
    // gali tiesipg page > bet tada tai bus tiesiog naujam page atidarys

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:3000')

})