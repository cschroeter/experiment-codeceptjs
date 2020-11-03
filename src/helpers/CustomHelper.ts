import { ChromiumBrowser } from "playwright";

class CustomHelper extends Helper {
  constructor(config: any) {
    super(config);
    this.helpers;
  }

  async setPermissions() {
    const { browser }: { browser: ChromiumBrowser } = this.helpers.Playwright;
    const context = browser.contexts()[0];
    await context.grantPermissions(["camera", "microphone"], {
      origin: "https://webcamtests.com/",
    });
  }
}

export = CustomHelper;
