/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Screen {
  constructor (private selector: string) {}

  async open () {
    return await this.waitForIsShown(true);
  }

  async waitForIsShown (isShown = true): Promise<boolean | void> {
    return await $(this.selector).waitForDisplayed({ reverse: !isShown });
  }
}
