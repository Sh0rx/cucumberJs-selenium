var webdriver = require('selenium-webdriver');
// const { By, Key, Builder } = require("selenium-webdriver");

var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.manage().setTimeouts({implicit: (10000)});

class BasePage {

    constructor() {
        globalThis.driver = driver;
    }

    async openPage(webpageURL) {
        driver.get(webpageURL);
    }

    async closeBrowser() {
        driver.quit();
    }

}

module.exports = BasePage;