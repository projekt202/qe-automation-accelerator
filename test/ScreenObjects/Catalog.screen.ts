import Menu from './Components/Menu';
import Screen from './Screen';

class CatalogScreen extends Screen {
  constructor() {
    super('~Catalog-screen');
  }

  async open () {
    if (browser.isIOS) {
      await (await Menu.catalogButton).click();
    }
    return super.waitForIsShown(true);
  }

  async openDetails (id: string) {
    await (await $(`~${id}`)).click();
  }
}

export default new CatalogScreen();
