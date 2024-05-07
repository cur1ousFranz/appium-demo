let assert; 
import('chai').then(chaiModule => {
  assert = chaiModule.assert;
})

module.exports = {
    mainScreen: async function() {
        getButton
    },

    tapButton: async function() {
        const button = await getButton()
        button.click()
    }, 

    textDisplayed: async function() {
        const text = await getText()
        assert(await text.isDisplayed(), "Text not displayed")
    },

    waitSeconds(seconds) {
        browser.pause(seconds * 1000);
    }
}

async function getButton() {
  return await browser.$(
    'android=new UiSelector().resourceId("com.example.demo:id/btnOrder")'
  );
}

async function getText() {
    return await browser.$(
        'android=new UiSelector().resourceId("com.example.demo:id/tvHelloWorld")'
      );
}
