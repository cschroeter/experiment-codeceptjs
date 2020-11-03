import { ChromiumBrowser } from "playwright";

class CustomHelper extends Helper {
  constructor(config: any) {
    super(config);
    this.helpers;
  }
  printMessage(msg: string) {
    console.log(msg);
  }

  printHelpers() {
    console.log("Helpers enabled", Object.keys(this.helpers));
  }
  async setPermissions() {
    const { browser }: { browser: ChromiumBrowser } = this.helpers.Playwright;
    const context = browser.contexts()[0];
    await context.grantPermissions(["camera", "microphone"], {
      origin: "https://meet.jit.si/",
    });
    // await context.pages()[0].reload();
  }
}

export = CustomHelper;
