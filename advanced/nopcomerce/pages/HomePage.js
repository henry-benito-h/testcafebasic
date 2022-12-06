import { Selector, t} from "testcafe";

class HomePage{
    constructor(){
        this.subTitleHeader = Selector('h2').withText('Welcome to our store');
        this.registerLink = Selector("a").withText('Register');
        this.logInLink = Selector("a").withText('Log in');
        this.cartLink = Selector("a").withText('Shopping cart');
        this.myAccountLink = Selector("a").withText('My account');
        this.logOutLink = Selector("a").withText('Log out');
        this.currencyList = Selector('select#customerCurrency');

    }

    get productSearh(){
        return Selector("input[id='small-searchterms']")
    }

    async search(product){
        await t
        .typeText(this.productSearh(), product)
        .wait(3000)
        .pressKey('enter');
    }

    async changeCurrency(currency){
        await t
        .click(this.currencyList)
        .click(Selector('option', {text: currency}));
    }
}
export default new HomePage();