import { ClientFunction } from 'testcafe';
import Homepage from '../pages/HomePage';
import Registerpage from '../pages/RegisterPage';
import Searchresults from '../pages/SearchResultPage'
import Productdetails from '../pages/ProductDetailsPage'
import Cartpage from '../pages/CartPage'
import Checkoutpage from '../pages/CheckoutPage'
import Myorderpage from '../pages/MyOrdersPage'

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'moataz'+randomNumber+'@nabil.com';

fixture`E2E Fixture`
    .page(URL);
 
test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(Homepage.subtitleHeader.exists).ok()
});

test
.meta("type", "acc")
("Place Order E2E Tests", async (t) => {
    await t
    .maximizeWindow()
    .click(Homepage.registerLink)
    .expect(getURL()).contains('register')
    .click(Registerpage.GenderOption)
    .typeText(Registerpage.FirstName,'Moataz')
    .typeText(Registerpage.LastName,'Nabil')
    .typeText(Registerpage.Email,userEmail)
    .typeText(Registerpage.Password,'123456')
    .typeText(Registerpage.ConfirmPassword,'123456')
    .click(Registerpage.RegisterButton)
    .expect(Registerpage.SuccessfullMessage.exists).ok();
    await Homepage.search('Apple MacBook Pro 13-inch');
    await t
    .click(Searchresults.productTitle)
    .expect(getURL()).contains('apple-macbook-pro-13-inch')
    .expect(Productdetails.productPrice.exists).ok()
    .selectText(Productdetails.prductQuantity).pressKey("delete")
    .typeText(Productdetails.prductQuantity,'3')
    .click(Productdetails.addToCart)
    .expect(Productdetails.successMessage.exists).ok()
    .wait(3000)
    .click(Homepage.cartLink)
    .click(Cartpage.termsLabel)
    .click(Cartpage.checkoutBtn)
    .expect(getURL()).contains('checkout');
    await Checkoutpage.selectCountry('Germany');
    await t
        .takeScreenshot()
        .typeText(Checkoutpage.cityTxt,'Berlin')
        .typeText(Checkoutpage.addressTxt,'108 ddd test')
        .typeText(Checkoutpage.zipTxt,'123456')
        .typeText(Checkoutpage.phoneTxt,'332434345')
        .click(Checkoutpage.continueBtn)
        .click(Checkoutpage.nextDayOption)
        .click(Checkoutpage.nextShippingBtn)
        .click(Checkoutpage.nextPaymentBtn)
        .click(Checkoutpage.nextConfirmBtn)
        .click(Checkoutpage.confirmOrderBtn)
        .expect(Checkoutpage.orderConfirmationMessage.exists).ok()
        .click(Checkoutpage.viewOrderDetailsLink)
        .click(Homepage.myAccountLink)
        .click(Myorderpage.orders);
});

test("Change Currency Test", async (t) => {
    await Homepage.changeCurrency('Euro')
});