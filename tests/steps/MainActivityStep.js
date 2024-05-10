const mainScreen = require('../screens/MainActivity')
const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I wait for "(.*?)" seconds$/, function(seconds) {
    mainScreen.waitSeconds(seconds);
  });

When(/^I tap the Button of Device 1$/, async function() {
    await mainScreen.tapButtonDevice1()
})

Then(/^I should see the text Hello World of Device 1$/, async function() {
    await mainScreen.textDisplayedDevice1()
})

When(/^I tap the Button of Device 2$/, async function() {
    await mainScreen.tapButtonDevice2()
})

Then(/^I should see the text Hello World of Device 2$/, async function() {
    await mainScreen.textDisplayedDevice2()
})