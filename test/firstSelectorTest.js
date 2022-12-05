const { Selector } = require("testcafe");

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture").page("https://devexpress.github.io/testcafe/example");

test('Selector', async (t) => {
   await t
      .typeText(developerName, "TAU")
      .click(osOption)
      .click(submitButton);
});

test
   .page("https://the-internet.herokuapp.com/iframe")
   ('iFrame example', async (t) => {
      const iframeName = Selector("iframe#mce_0_ifr");
      const textArea = Selector("body#tinymce.mce-content-body");

      await t
         .switchToIframe(iframeName)
         .click(textArea)
         .pressKey('ctrl+a delete')
         .typeText(textArea, "Hello Henry")
         .expect(textArea.innerText).contains("Hello")
         .switchToMainWindow();
   });

test
   ('dropdown list example', async (t) => {
      const interfaceSelect = Selector("select#preferred-interface");
      const interfaceOptions = interfaceSelect.find("option");

      await t
         .click(interfaceSelect)
         .click(interfaceOptions.withText("Both"));

   });


test
   .page("https://the-internet.herokuapp.com/upload")
   ('upload example', async (t) => {
      const fileUpload = Selector("input#file-upload");
      const uploadFileButton = Selector("input#file-submit.button");

      await t
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .clearUpload(fileUpload)
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .click(uploadFileButton);
   });

test
   .page("https://the-internet.herokuapp.com/upload")
   ('set test speed example', async (t) => {
      const fileUpload = Selector("input#file-upload");
      const uploadFileButton = Selector("input#file-submit.button");

      await t
         .setTestSpeed(0.09)
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .clearUpload(fileUpload)
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .click(uploadFileButton);
   });

test
   .page("https://the-internet.herokuapp.com/upload")
   ('set timeout example', async (t) => {
      const fileUpload = Selector("input#file-upload");
      const uploadFileButton = Selector("input#file-submit.button");

      await t
         .setPageLoadTimeout(0)
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .clearUpload(fileUpload)
         .setFilesToUpload(fileUpload, "../upload/logo.png")
         .click(uploadFileButton);
   });

test
   ('drag example', async (t) => {
      const triedCheckbox = Selector("label").withText("I have tried TestCafe");
      const slider = Selector("#slider");

      await t
         .setTestSpeed(0.01)
         .click(triedCheckbox)
         .drag(slider, 360, 0, { offsetX: 10, offsetY: 10 });
   });


test
   ('hover example', async (t) => {
      await t
         .setTestSpeed(0.01)
         .hover("#populate");
   });