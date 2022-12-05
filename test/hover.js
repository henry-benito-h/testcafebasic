const { Selector } = require("testcafe");

fixture("First Fixture").page("https://devexpress.github.io/testcafe/example");

test
.meta("type", "acc")
   ('hover example', async (t) => {
      await t
         .setTestSpeed(0.01)
         .hover("#populate");
   });