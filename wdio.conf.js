exports.config = {
  runner: "local",
  specs: ["./tests/features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  // capabilities: [
  //   {
  //     // capabilities for local Appium web tests on an Android Emulator
  //     platformName: "Android",
  //     browserName: "",
  //     "appium:platformVersion": "12.0",
  //     "appium:automationName": "UiAutomator2",
  //     "appium:udid": "emulator-5554",
  //     "appium:app":
  //       "C:/Users/Franz/Documents/repositories/demo-stripe-android/app/build/outputs/apk/dev/release/app-dev-release-unsigned.apk",
  //     "appium:noReset": true,
  //   },
  // ],
  capabilities: {
    device1: {
      port: 4723,
      capabilities : {
        platformName: "Android",
        browserName: "",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Pixel 8 API 31 (1)",
        "appium:udid": "emulator-5554",
        "appium:app":
          "C:/Users/Franz/Documents/repositories/demo-stripe-android/app/build/outputs/apk/dev/release/app-dev-release-unsigned.apk",
        "appium:noReset": true,
      }
    },
    device2: {
      port: 4725,
      capabilities : {
        platformName: "Android",
        browserName: "",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Pixel 8 API 31 (2)",
        "appium:udid": "emulator-5556",
        "appium:app":
          "C:/Users/Franz/Documents/repositories/demo-stripe-android/app/build/outputs/apk/dev/release/app-dev-release-unsigned.apk",
        "appium:noReset": true,
      }
    }
  },
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "appium", {
        args: {
          port: 4723
        }
      }
    ],
    [
      "appium", {
        args: {
          port: 4725
        }
      }
    ]
  ],
  framework: "cucumber",
  reporters: [
    [
      "spec",
      {
        symbols: {
          passed: "[PASS]",
          failed: "[FAIL]",
        },
      },
    ],
    [
      "cucumberjs-json",
      {
        jsonFolder: "./build/reports/cucumberjson/",
        language: "en",
      },
    ],
  ],
  cucumberOpts: {
    require: ["./tests/steps/*.js"],
  },
};
