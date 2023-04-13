import Screen from './Screen';

class CartScreen extends Screen {
  constructor() {
    super('~Cart-screen');
  }

  get checkoutButton () {
    return $('~ProceedToCheckout');
  }

  async proceedToCheckout () {
    await (await this.checkoutButton).click();
  }
}

export default new CartScreen();
