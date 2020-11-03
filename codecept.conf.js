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
    Playwright: {
      url: "http://localhost:3000",
      show: false,
      chromium: {
        args: [
          "--allow-file-access-from-files",
          "--disable-translate",
          "--use-fake-ui-for-media-stream",
          "--use-file-for-fake-audio-capture=/home/cschroeter/Workspace/codeceptjs-ts/audio.wav",
          "--use-file-for-fake-video-capture=/home/cschroeter/Workspace/codeceptjs-ts/video.mp4",
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
