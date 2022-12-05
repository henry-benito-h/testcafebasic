const { Selector } = require("testcafe");

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture ("First Fixture").page("https://devexpress.github.io/testcafe/example");


test
('valid login', async (t)=>{
   const developerNameElement = await developerName.with({visibilityCheck:true})
   await t
   .typeText(developerNameElement, "Henry Genial")
   .click(osOption)
   .debug()
   .click(submitButton)
   .expect(Selector("#article-header").innerText).contains("Henry");

});
