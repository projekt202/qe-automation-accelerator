class Menu {
  get menuButton() {
    return $('~View menu');
  }

  get catalogButton() {
    return $('~Catalog-tab-item');
  }

  get cartButton() {
    return $(browser.isIOS ? '~Cart-tab-item' : '~View cart');
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
    if (browser.isIOS) {
      return (await this.cartButton).waitForDisplayed({ timeout: 5000 });
    }
    return (await this.menuButton).waitForDisplayed({ timeout: 5000 });

  }
}

export default new Menu();
