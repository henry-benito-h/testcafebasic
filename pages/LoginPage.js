import { Selector, t } from "testcafe";
class LoginPage {
    constructor() {
        this.usernameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async login(username, password) {
        await t
            .typeText("#user-name", username)
            // .debug()
            .typeText("#password", password)
            .click("#login-button");
    }
}

export default new LoginPage();