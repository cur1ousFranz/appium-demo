const mainScreen = require('../screens/MainActivity')
const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I wait for "(.*?)" seconds$/, function(seconds) {
    mainScreen.waitSeconds(seconds);
  });

When(/^I tap the Button$/, async function() {
    await mainScreen.tapButton()
})

Then(/^I should see the text Hello World$/, async function() {
    await mainScreen.textDisplayed()
})