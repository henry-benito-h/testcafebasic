const { Selector } = require("testcafe");

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example")
.beforeEach(async t => {
   await t
   .maximizeWindow()
   .setTestSpeed(0.1)
   .setPageLoadTimeout(0);
});

test
.meta("type", "acc")
('Selector', async (t) => {
   await t
      .typeText(developerName, "TAU")
      .click(osOption)
      .click(submitButton);
});
