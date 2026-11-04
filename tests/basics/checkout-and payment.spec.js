const { test } = require("@playwright/test");
const { TopMenuPage } = require("../../pages/TopMenuPage");
const { LoginPage } = require("../../pages/LoginPage");
const { ShoppingCartPage } = require("../../pages/ShoppingCartPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");
const { OrderConfirmationPage } = require("../../pages/OrderConfirmationPage");
const {writeDataToFile} = require("../../utils/fileUtils");

test("@smoke Checkout and Payment", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenuPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    // User has at least one product in cart
    await loginPage.openTestApp("http://localhost:3000/store/login");
    await loginPage.login("julijvt@yahoo.com", "Jvt1234512345")

    // Go to cart - Cart page displays selected items
    await topMenuPage.clickOnCartIcon();

    // Click "Proceed to Checkout" - Checkout page opens
    await shoppingCartPage.clickOnCheckoutButton();

    // Enter shipping details - Shipping details accepted
    await checkoutPage.fillPhoneNumber("+3704567890");
    await checkoutPage.fillShipAddress1("Adress");
    await checkoutPage.fillShipCity("Lentvaris");
    await checkoutPage.fillShipState("Trakai");
    await checkoutPage.fillShipZipCode("Lt25123");
    await checkoutPage.fillShipCountry("AU")

    // Select payment method and enter payment details - Payment method selected
    await checkoutPage.fillCardName("Jvt");
    await checkoutPage.fillCardNumber("1234456789012345");
    await checkoutPage.fillCardExpiry("11/28");
    await checkoutPage.fillCardCVV("321");

    // Click on “Place Order” button - Order confirmation page with order ID displayed   
    await checkoutPage.clickPlaceOrderButton();
    await orderConfirmationPage.checkIfOrderPlacedSuccessfully("Order Placed Successfully!");
    const orderid = await orderConfirmationPage.getOrderID();
    await writeDataToFile('orders.txt', orderid);

    // Click on “Continue Shopping” button - User redirected to home page
    await orderConfirmationPage.clickOnContinueShoppingButton();

    // Logout from portal - User should get logged out
    await topMenuPage.logoutFromApp();

})



