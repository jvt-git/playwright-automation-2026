require('dotenv').config();

const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { DashboardPage } = require('../../pages/DashboardPage');
const { ProductDetailsPage } = require('../../pages/ProductDetailsPage');
const { TopMenuPage } = require('../../pages/TopMenuPage');
const { readCSV } = require('../../utils/fileUtils');

// NEED TO CHANGE IN THE package.json  "scripts": { "test:qa": "cross-env TEST_ENV=qa npx playwright test add-to-cart"

// test.skip > Naudojamas, kai nori praleisti testą >Testas nebus vykdomas
// test.fail > pass > Naudojamas, kai tikiesi, kad testas turi failinti
// test.fixme > Naudojamas, kai testas yra žinomas kaip neveikiantis arba nebaigtas, ir jo kol kas nereikia vykdyti
// test.slow >  Playwright padidina testo timeout’ą 3 kartus > testas vygdomas lėtai
// test.only > paleidžia tik šį testą, visus kitus ignoruoja
// test.describe > grupuoja susijusius testus

// test.describe('Function1 or Login functionality tests', ()=>{
//     test('this is test 1', async({page})=> {

//     })
//      test('this is test 2', async({page})=> {
        
//     })
//      test('this is test 3', async({page})=> {
        
//     })
// }) 
// OR this way >  test("@smoke Product search and add to cart", async ({ page }) =>
test("Product search and add to cart", { tag: ['@reg', '@smoke'] }, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const topMenuPage = new TopMenuPage(page);

    const td = await readCSV('testData.csv');
    console.log(td);
    // first line in the file 
    const { product, itemsInCart } = td[0];

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


});