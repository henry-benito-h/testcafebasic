const { Selector, ClientFunction } = require("testcafe");

const getPageURL = ClientFunction(() => window.location.href);
const getHostname = ClientFunction(() => window.location.hostname);
fixture("First Fixture").page("https://devexpress.github.io/testcafe/example");

test('client function', async (t) => {
   await t
      .typeText("#developer-name", "TAU")
      .click("#macos")
      .click("#submit-button")
      .expect(getPageURL()).contains("thank-you")
      .expect(getHostname()).contains("io");
});
