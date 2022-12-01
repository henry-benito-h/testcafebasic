const { Selector } = require("testcafe");
import LoginPage from "../pages/LoginPage";

fixture `Login suite`.page("./")
.page("https://www.saucedemo.com");

test('valid login', async (t)=>{
    LoginPage.login("standard_user","secret_sauce");
    await t
    .expect(Selector(".title").innerText)
    .eql("PRODUCTS");
});

test('invalid login', async (t)=>{
    LoginPage.login("test","test");
    await t
    // .takeScreenshot("./screenshots")
    .expect(Selector(`h3[data-test="error"]`).innerText)
    .eql("Epic sadface: Username and password do not match any user in this service");
})