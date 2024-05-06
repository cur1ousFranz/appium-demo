const mainScreen = require('../screens/MainActivity')
const { When, Given } = require('@cucumber/cucumber')

Given(/^I wait for "(.*?)" seconds$/, function(seconds) {
    mainScreen.waitSeconds(seconds);
  });

When(/^I tap the Button$/, async function() {
    await mainScreen.tapButton()
})