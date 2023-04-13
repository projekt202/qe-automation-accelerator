import Screen from '../Screen';

class Menu {
  get catalogButton() {
    return $('~Catalog-tab-item');
  }

  get cartButton() {
    return $('~Cart-tab-item');
  }

  get moreButton() {
    return $('~More-tab-item');
  }

  async openCatalog() {
    return  (await this.catalogButton).click();
  }

  async openCart() {
    return (await this.cartButton).click();
  }

  async openMore() {
    return (await this.moreButton).click();
  }

  async waitForMenuToBeShown(): Promise<boolean | void> {
    return (await this.cartButton).waitForDisplayed({ timeout: 5000 });
  }
}

export default new Menu();
