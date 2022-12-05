const { Selector } = require("testcafe");
import LoginPage from "../pages/LoginPage";

fixture ("First Fixture").page("https://devexpress.github.io/testcafe/example");

test
.meta("type", "acc")
('video pass', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry");

});

test
('video fails', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henryssss");
});
