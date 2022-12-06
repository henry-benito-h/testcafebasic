import { ClientFunction } from "testcafe";
import HomePage from "../advanced/nopcomerce/pages/HomePage";
import LoginPage from "../advanced/nopcomerce/pages/LoginPage";
import CustomerPage from "../advanced/nopcomerce/pages/CustomerPage";
import RegisterPage from "../advanced/nopcomerce/pages/RegisterPage";


const dataSet = require('../advanced/nopcomerce/data/data.json');
const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = "something" + randomNumber + "@algo.com";

fixture("POM - Registration Fixture")
    .page(URL);

test("Assert Home Page Test", async (t) => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subTitleHeader.exists).ok();

});


test
    .meta("type", "acc")
    ("User Registration and Login Test", async (t) => {
        await t
            .maximizeWindow()
            .click(HomePage.registerLink)
            .expect(getURL()).contains('register')
            .click(RegisterPage.GenderOption)
            .typeText(RegisterPage.FirstName, 'Henry')
            .typeText(RegisterPage.LastName, 'Benito');

        await RegisterPage.selectDay('5');
        await RegisterPage.selectMonth('November');
        await RegisterPage.selectYear('1983');

        await t
            .typeText(RegisterPage.Email, userEmail)
            .typeText(RegisterPage.Password, '123456')
            .typeText(RegisterPage.ConfirmPassword, '123456')
            .click(RegisterPage.RegisterButton)
            .expect(RegisterPage.SuccessfullMessage.exists).ok()
            .click(HomePage.logOutLink)
            .click(HomePage.logInLink)
            .expect(LoginPage.accountHeader.exists).ok()
            .typeText(LoginPage.emailInput, userEmail)
            .typeText(LoginPage.passwordInput, '123456')
            .click(LoginPage.submitButton)
            .click(HomePage.myAccountLink)
            .expect(CustomerPage.ordersLink.exists).ok()
            .click(CustomerPage.ordersLink)
            .expect(CustomerPage.noOrdersLabel.exists).ok()
    });

dataSet.forEach(data => {
    test
        .meta("type", "acc")
        ("User Registration and Login Test - Data driven", async (t) => {
            await t
                .maximizeWindow()
                .click(HomePage.registerLink)
                .expect(getURL()).contains('register')
                .click(RegisterPage.GenderOption)
                .typeText(RegisterPage.FirstName, data.firstname)
                .typeText(RegisterPage.LastName, data.lastname);

            await RegisterPage.selectDay(data.birthday);
            await RegisterPage.selectMonth(data.birthmonth);
            await RegisterPage.selectYear(data.birthyear);

            await t
                .typeText(RegisterPage.Email, data.email + randomNumber + "@algo.com")
                .typeText(RegisterPage.Password, data.password)
                .typeText(RegisterPage.ConfirmPassword, data.password)
                .click(RegisterPage.RegisterButton)
                .expect(RegisterPage.SuccessfullMessage.exists).ok()
                .click(HomePage.logOutLink)
                .click(HomePage.logInLink)
                .expect(LoginPage.accountHeader.exists).ok()
                .typeText(LoginPage.emailInput, data.email + randomNumber + "@algo.com")
                .typeText(LoginPage.passwordInput, data.password)
                .click(LoginPage.submitButton)
                .click(HomePage.myAccountLink)
                .expect(CustomerPage.ordersLink.exists).ok()
                .click(CustomerPage.ordersLink)
                .expect(CustomerPage.noOrdersLabel.exists).ok()
        });
});