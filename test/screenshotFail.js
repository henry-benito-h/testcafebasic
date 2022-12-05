const { Selector } = require("testcafe");

fixture ("First Fixture").page("https://devexpress.github.io/testcafe/example");

test
('screenshot pass', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henry")
});

test
('screenshot fail', async (t)=>{
   await t
   .typeText("#developer-name", "Henry Genial")
   .click("#macos")
   .click("#submit-button")
   .expect(Selector("#article-header").innerText).contains("Henryss")
});

// Run from screen-fail package.json script
