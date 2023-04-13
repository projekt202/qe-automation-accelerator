import Screen from './Screen';

class CheckoutScreen extends Screen {
  constructor() {
    super('~Checkout-screen');
  }

  get title () {
    return $('~Checkout');
  }
}

export default new CheckoutScreen();
