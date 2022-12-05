const { Selector } = require("testcafe");
import LoginPage from "../pages/LoginPage";

fixture ("First Fixture").page("https://devexpress.github.io/testcafe/example");

test
.meta("env", "production")
('metadata', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry");

});

test('name', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry");

});

test('other', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry");

});
