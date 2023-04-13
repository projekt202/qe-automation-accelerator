import Screen from './Screen';

class CatalogScreen extends Screen {
  constructor() {
    super('~Catalog-screen');
  }

  get catalogMenuButton () {
    return $('~Catalog-tab-item');
  }

  async open () {
    await (await this.catalogMenuButton).click();
    return super.waitForIsShown(true);
  }

  async openDetails (id: string) {
    await (await $(`~${id}`)).click();
  }
}

export default new CatalogScreen();
