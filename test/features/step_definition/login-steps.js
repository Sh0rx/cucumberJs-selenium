const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@cucumber/cucumber');
require('chromedriver');

const loginPage = require('../../pageobjects/loginpage');

Given('I am on the login page {string}', async (webpageURL) => {
    await loginPage.openPage(webpageURL)
});

When(/^I enter user (.+) and pass (.+)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.+)$/, async (expectedMessage) => {
    await loginPage.readFlashMessage(expectedMessage);
});

// BEFORE AND AFTER FUNCTIONS
BeforeAll(async () => {
    console.log("Inside BeforeAll");
    // driver = await new Builder().forBrowser("chrome").build();
});

Before(function () {
    console.log("Inside Before");
});

After(function () {
    console.log("Inside After");
});

AfterAll(async () => {
    console.log("Inside AfterAll");
    loginPage.closeBrowser();
});