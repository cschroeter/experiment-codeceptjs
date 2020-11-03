import { isJSDocNamepathType } from "typescript";

Feature("Todo");

Scenario("Can add a todo", async ({ I, todoPage }) => {
  I.amOnPage("https://webcamtests.com/");
  I.saveScreenshot("without_rmissions.png");

  // I.setPermissions();
  I.wait(5);

  I.saveScreenshot("with_permissions.png");
  let logs = await I.grabBrowserLogs();
  console.log(JSON.stringify(logs));

  // session("john", () => {
  //   todoPage.goToHome();
  //   todoPage.createTask("John's task");
  // });

  // session("cate", () => {
  //   todoPage.goToHome();
  //   todoPage.createTask("Cate's task");
  // });

  // // const john = () => session("john", () => )

  // const x = session("john", () => {
  //   I.refreshPage();
  // });

  // const john: typeof I = Promise.resolve(
  //   session("john", () => I.see("Cate's task"))
  // );

  // john.see("Cate's task");

  // session("john", () => I.see("Cate's task"));

  // john.see()

  // const john = (cb: any) => session("john", I[cb]);

  // john.s
  // john(I.see("Cate's task"));
});
