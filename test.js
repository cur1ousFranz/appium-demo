const { remote } = require("webdriverio");

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:app":
    "C:/Users/A D M I N/OneDrive/Documents/demo-stripe-android/app/build/outputs/apk/dev/release/app-dev-release-unsigned.apk",
  "appium:appPackage": "com.example.demo",
  "appium:appActivity": ".ui.MainActivity",
  "appium:noReset": true,
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const button = driver.$('android=new UiSelector().resourceId("com.example.demo:id/btnOrder")');
    const textview = driver.$('android=new UiSelector().resourceId("com.example.demo:id/tvHelloWorld")');
    const result = await button.click();
    await textview.click();
    console.log("Result", result);

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
