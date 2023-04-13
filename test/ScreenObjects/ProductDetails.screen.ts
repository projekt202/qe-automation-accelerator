import Screen from './Screen';

class ProductDetailsScreen extends Screen {
  constructor() {
    super('~ProductDetails-screen');
  }

  get addToCartButton () {
    return $('~Add To Cart');
  }

  async addToCart () {
    await (await this.addToCartButton).click();
  }
}

export default new ProductDetailsScreen();
