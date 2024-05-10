let assert; 
import('chai').then(chaiModule => {
  assert = chaiModule.assert;
})
const { remote } = require("webdriverio");
const config = require('../../wdio.conf.js').config

module.exports = {
    mainScreen: async function() {
      getButtonDevice1,
      getButtonDevice2
    },

    tapButtonDevice1: async function() {
        const button = await getButtonDevice1()
        button.click()
    }, 

    textDisplayedDevice1: async function() {
        const text = await getTextDevice1()
        assert(await text.isDisplayed(), "Text not displayed")
    },

    tapButtonDevice2: async function() {
        const button = await getButtonDevice2()
        button.click()
    }, 

    textDisplayedDevice2: async function() {
        const text = await getTextDevice2()
        assert(await text.isDisplayed(), "Text not displayed")
    },

    waitSeconds(seconds) {
        browser.pause(seconds * 1000);
    }
}

let device1
let device2 

async function getButtonDevice1() {
  device1 = await remote(config.capabilities.device1)
  return await device1.$(
    'android=new UiSelector().resourceId("com.example.demo:id/btnOrder")'
  );
}

async function getTextDevice1() {
  return await device1.$(
      'android=new UiSelector().resourceId("com.example.demo:id/tvHelloWorld")'
    );
}

async function getButtonDevice2() {
  device2 = await remote(config.capabilities.device2)
  return await device2.$(
    'android=new UiSelector().resourceId("com.example.demo:id/btnOrder")'
  );
}

async function getTextDevice2() {
  return await device2.$(
      'android=new UiSelector().resourceId("com.example.demo:id/tvHelloWorld")'
    );
}
