const { Selector } = require("testcafe");

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example");

test.skip('Skipped', async (t) => {
   await t
   .expect(developerName.value).eql('', "input is empty")
   .typeText(developerName, "TAU")
   .expect(developerName.value).eql('TAU', "input contains TAU")
      .click(osOption)
      .click(submitButton);
});

test('No skipped', async (t) => {
   await t
   .expect(developerName.value).eql('', "input is empty")
   .typeText(developerName, "TAU")
   .expect(developerName.value).eql('TAU', "input contains TAU")
      .click(osOption)
      .click(submitButton);
});

test.only('Only', async (t) => {
   await t
   .expect(developerName.value).eql('', "input is empty")
   .typeText(developerName, "TAU")
   .expect(developerName.value).eql('TAU', "input contains TAU")
      .click(osOption)
      .click(submitButton);
});
