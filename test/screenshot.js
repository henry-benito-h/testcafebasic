const { Selector } = require("testcafe");
import LoginPage from "../pages/LoginPage";

fixture ("First Fixture").page("https://devexpress.github.io/testcafe/example");

test
.meta("type", "acc")
('screenshot', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .takeElementScreenshot("#submit-button")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry")
   .takeScreenshot();
});
