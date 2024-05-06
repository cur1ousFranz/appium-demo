module.exports = {
    mainScreen: async function() {
        getButton
    },

    tapButton: async function() {
        const button = await getButton()
        button.click()
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
