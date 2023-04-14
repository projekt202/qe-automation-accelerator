import Screen from './Screen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginScreen extends Screen {
  constructor() {
    super('~Login-screen');
  }

  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $('~username-field');
  }

  public get inputPassword() {
    return $('~password-field');
  }

  public get loginButton() {
    return $('~LoginButton');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    if (browser.isIOS) {
      await (await $('~Usernames')).click();
    }
    await (await this.loginButton).click();
  }
}

export default new LoginScreen();
