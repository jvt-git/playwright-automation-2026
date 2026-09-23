import { expect, test } from '@playwright/test'

// TEXT BOXES >>> recomended buit-in locators:
test('Working-with-webelements', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    // name the variable by fullname_textbox (kintamasis)
    const fullname_textbox = page.getByPlaceholder("John Doe")
    // force true > Bandyk įvesti tekstą net jei Playwright mano, kad elementas nėra pilnai pasiekiamas
    await fullname_textbox.fill("JVT Acaremy", { force: true });
    await fullname_textbox.clear();
    await fullname_textbox.fill("JVT Acaremy 123", { force: true });
    await fullname_textbox.clear();
    // using keyboard > Tekstas rašomas raidė po raidės, lyg žmogus spausdintų
    await fullname_textbox.pressSequentially("Software Testing JVT");
    await fullname_textbox.clear();
    await fullname_textbox.pressSequentially("Software Testing JVT 123", { delay: 100 });
})

// RADIO BUTTONS >>> check()-Tik pažymi,  setChecked() -Gali pažymėti arba nužymėti
test('Working-with-radio buttons', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    const radio_button_female = page.getByLabel("Female");
    const radio_button_male = page.locator('#gender-male');
    await radio_button_female.check();
    // patikrina ar tikrai pažymėtas
    expect(radio_button_female).toBeChecked();
    const isCheckedFemale = await radio_button_female.isChecked();
    // jei būtų false, testas nepraeitų
    expect(isCheckedFemale).toBeTruthy();
    // {force: true} > forcing if radio button not visible
    await (radio_button_male).setChecked({ force: true });
    expect(radio_button_male).toBeChecked();
})

// Check box >>> check()-Tik pažymi,  setChecked() -Gali pažymėti arba nužymėti
test('Working-with-checkboxes', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    const checkbox_tc = page.getByLabel("I agree to the");
    const checkbox_newsletter = page.getByLabel("Subscribe to newsletter");
    await checkbox_tc.check();
    expect(checkbox_tc).toBeChecked();
    await checkbox_newsletter.setChecked();
    const news_check = await checkbox_newsletter.isChecked();
    expect(news_check).toBeFalsy();
})

// Dopdown >>> check()-Tik pažymi,  setChecked() -Gali pažymėti arba nužymėti
test('Working-with-dropdown', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    const country_dropdown = page.locator('#country');
    // by value
    await country_dropdown.selectOption("ca");
    // by label
    await country_dropdown.selectOption({label: "Australia"});

})