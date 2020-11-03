Feature("Device");

Scenario("Can add a todo", async ({ I }) => {
  I.amOnPage("https://webcamtests.com/");

  I.click("Click here to allow access to webcam identifiers");
  I.saveScreenshot("step1.png");

  I.click("Test my cam");

  I.wait(5);
  I.saveScreenshot("step2.png");
});
