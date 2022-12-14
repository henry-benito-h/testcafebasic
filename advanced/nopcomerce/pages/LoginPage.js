import { Selector } from "testcafe";

class LoginPage {
  constructor() {
    this.emailInput = Selector("#Email");
    this.passwordInput = Selector("#Password");
    this.submitButton = Selector("button.login-button");
    this.accountHeader = Selector("strong").withText("Returning Customer");
  }
}

export default new LoginPage();