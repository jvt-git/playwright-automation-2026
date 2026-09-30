import { expect, test } from '@playwright/test'
import { it } from 'node:test';

// TEXT BOXES >>> recomended buit-in locators:
test('Working-with-webelements operations', async ({ page }) => {
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
test('Working-with-radio buttons operations', async ({ page }) => {
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
test('Working-with-checkboxes operations', async ({ page }) => {
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
test('Working-with-dropdown operations', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Register Page').first().click();
    const country_dropdown = page.locator('#country');
    // by value
    await country_dropdown.selectOption("ca");
    // by label
    await country_dropdown.selectOption({ label: "Australia" });

})

// Mouse click >>> check()-Tik pažymi,  setChecked() -Gali pažymėti arba nužymėti
test('Mouse click operations', async ({ page }) => {
    await page.goto('http://localhost:3000')
    // click()=click({button:'left'}); more options > click({button:'right'});click({button:'middle'});
    await page.getByText('Dynamic Table').first().click({ button: 'left' });
    // not working >  i –nepaiso raidžių dydžio > const addRow_bnt = page.getByRole('button', {name: /Add Row/i});
    const addRow_bnt = page.locator('#add-row-btn');
    await addRow_bnt.dblclick();
    await addRow_bnt.click();
    await addRow_bnt.click({ button: 'right' });
    await addRow_bnt.click({ button: 'middle' });
    // await addRow_bnt.click({ modifiers: 'Shift' });
    // await addRow_bnt.click({ modifiers: 'ControlOrMeta' });
    // await addRow_bnt.click({ button: 'right', modifiers:'Shift', position: { x: 10, y: 20 } });
})


test('Keybord operations', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Dynamic Table').first().click();
    const addRow_bnt = page.locator('#add-row-btn');
    await addRow_bnt.click();
    // press method
    await page.press('body', 'Tab');
    await page.press('body', 'Tab');
    await page.press('body', 'Enter');

    await page.getByText('Register Page').first().click();
    const full_name = page.locator('#full-name');
    const email = page.locator('#email');
    await full_name.fill("JVT Academy");
    // ('Control+A') > working only on Windows, ('Meta+A') > working only on Mac, ('ControlOrMeta+A') > working on W & M
    await full_name.press('ControlOrMeta+A');
    await full_name.press('ControlOrMeta+C');
    await email.press('ControlOrMeta+V');
})



test('Mouse hover and focus operations', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Mouse Hover').first().click();
    const dropdown = page.locator('#hover-dropdown-trigger');
    const hover_box = page.locator('#hover-box-1');
    await dropdown.hover({ force: true });
    await hover_box.focus();

})

test('Drag and Drop operations', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Drag and Drop').first().click();
    const item_to_drag_WriteTest = page.locator('#drag-item-1');
    const in_process_column = page.locator('#col-inprogress');
    await item_to_drag_WriteTest.dragTo(in_process_column);
    const item_in_progress_card = page.locator('#drag-item-4');
    const done_column = page.locator('#col-done');
    //  Drag >>>
    await item_to_drag_WriteTest.dragTo(in_process_column);
    //  Manual drag >>>
    await item_in_progress_card.hover();
    // pressing left mouse button.keeping it pressed
    await page.mouse.down();
    await done_column.hover();
    // releasing mouse button to dropp it 
    await page.mouse.up();

})


test('Handling scrolling', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Scrollbars').first().click();
    const footer_course_link = page.locator('#footer-courses');
    const vertical_scroll_container = page.locator('#vertical-scroll-box');
    // Scrolls automatically so that button is visible
    await footer_course_link.scrollIntoViewIfNeeded();
    // Position the mouse and scroll with the mouse wheel (0 horizontal, 10 vertical)
    await vertical_scroll_container.hover();
    await page.mouse.wheel(0, 1000);
    // Alternatively, programmatically scroll a specific element
    await vertical_scroll_container.evaluate(e => e.scrollTop += 300);

})

test('Handling sliders', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.getByText('Horizontal Slider').first().click();
    const temperature_slider = page.locator('#temp-slider');
    await temperature_slider.scrollIntoViewIfNeeded();
    const bbox = await temperature_slider.boundingBox();
    // centre of bbox
    const x = bbox.x + bbox.width / 2;
    const y = bbox.y + bbox.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down()
    // to the left x-1oo , to the right +100
    await page.mouse.move(x - 100, y + 0);
    await page.mouse.up();
    await page.mouse.down()
    await page.mouse.move(x + 100, y + 0);
    await page.mouse.up();



})