import { VALID_PASSWORD, VALID_USERNAME } from './Helpers/Constants';
import CartScreen from './ScreenObjects/Cart.screen';
import CatalogScreen from './ScreenObjects/Catalog.screen';
import CheckoutScreen from './ScreenObjects/Checkout.screen';
import Menu from './ScreenObjects/Components/Menu';
import LoginScreen from './ScreenObjects/Login.screen';
import ProductDetailsScreen from './ScreenObjects/ProductDetails.screen';

describe('Login', () => {
  beforeEach( async () => {
    await Menu.waitForMenuToBeShown();
    await CatalogScreen.open();
    await CatalogScreen.openDetails('Sauce Lab Back Packs');
    await ProductDetailsScreen.waitForIsShown(true);
    await ProductDetailsScreen.addToCart();
    await Menu.openCart();
    await CartScreen.waitForIsShown(true);
    await CartScreen.proceedToCheckout();
  });

  it('should be able to login', async () => {
    await LoginScreen.login(VALID_USERNAME, VALID_PASSWORD);
    await expect(await CheckoutScreen.title).toExist();
  });
});
