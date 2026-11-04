class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator("#proceed-to-checkout-btn");
    }
    
    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }
}

module.exports = { ShoppingCartPage };