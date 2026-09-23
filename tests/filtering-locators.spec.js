import { expect, test } from '@playwright/test'
// recomended buit-in locators:
test('Filtering locators', async ({ page }) => {
    await page.goto('http://localhost:3000')
    // has text
    // await page.getByRole("listitem").filter({ hasText: 'Tooltips' }).click();
    // has NOT text + count 
    console.log(await page.getByRole("listitem").filter({ hasNotText: "Tooltips" }).count());
    // by child
    console.log(await page.getByRole("listitem").filter({ hasNot: page.getByText("Radio Buttons") }).count());
    await page.getByRole("listitem").filter({ has: page.getByText("Radio Buttons") }).click();
})

