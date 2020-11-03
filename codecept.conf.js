require("ts-node/register");
const { setHeadlessWhen } = require("@codeceptjs/configure");
const { bootstrap } = require("./presettings.ts");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./src/tests/**_test.ts",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://webcamtests.com/",
      show: true,
      waitForNavigation: "networkidle0",
      chrome: {
        args: [
          "--use-fake-ui-for-media-stream",
          "--use-fake-device-for-media-stream",
        ],
      },
    },
    CustomHelper: {
      require: "./src/helpers/CustomHelper.ts",
    },
  },
  bootstrap,
  include: {
    todoPage: "./src/pages/todoPage.ts",
  },
  name: "typescript-boilerplate",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
