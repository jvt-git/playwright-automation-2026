require('dotenv').config();

const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { DashboardPage } = require('../../pages/DashboardPage');
const { ProductDetailsPage } = require('../../pages/ProductDetailsPage');
const { TopMenuPage } = require('../../pages/TopMenuPage');
const { readJSON } = require('../../utils/fileUtils');
const testdata = JSON.parse(JSON.stringify(require("../../testdata/testcaseData.json")));


// NEED TO CHANGE IN THE package.json  "scripts": { "test:qa": "cross-env TEST_ENV=qa npx playwright test add-to-cart-json"

// nuskaitom Json iš utils>fileUtils.js ir atvaizduojam konsolėje
const td = readJSON('testcaseData.json');

console.log(td);

// First line in the JSON file
const { product, itemsInCart } = td[0];

console.log('Product:', product);
console.log('Items in cart:', itemsInCart);

// product added from the file testcaseData.json

// test.skip > Naudojamas, kai nori praleisti testą >Testas nebus vykdomas
// test.fail > pass > Naudojamas, kai tikiesi, kad testas turi failinti
// test.fixme > Naudojamas, kai testas yra žinomas kaip neveikiantis arba nebaigtas, ir jo kol kas nereikia vykdyti
// test.slow >  Playwright padidina testo timeout’ą 3 kartus > testas vygdomas lėtai
// test.only > paleidžia tik šį testą, visus kitus ignoruoja

testdata.forEach(({ product, itemsInCart }) => {
  test(`Product search and add to cart with ${product}`, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const topMenuPage = new TopMenuPage(page);

    // Login using valid credentials - Login is successful 
    await loginPage.openTestApp(process.env.BASE_URL + '/login');
    await loginPage.login(process.env.UNAME, process.env.PASSWORD);

    // Enter product name “Laptops” in search bar - Search bar accepts input 
    await dashboardPage.enterProductNameToSearch(product);

    // Click "Search" icon - Relevant products displayed 
    await dashboardPage.clickSearchButton();

    // Validate only searched category products are displayed - Only matching category products are returned 
    await dashboardPage.checkProductList(product);

    // Select first product from searched items - Product details page opens 
    await dashboardPage.clickOnFirstProductFromList();

    // Click on "Add to Cart" button - Product should get added to cart
    await productDetailsPage.addProductToCart();
    await productDetailsPage.checkIfProductAddedSuccessfully(itemsInCart);

    // Logout from portal - User should get logged out
    await topMenuPage.logoutFromApp();


  })


});