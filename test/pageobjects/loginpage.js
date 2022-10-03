const { By, Key, Builder, until } = require("selenium-webdriver");
const BasePage = require('./basepage');
const assert = require('assert');

class LoginPage extends BasePage {

    constructor() {
        super();
        this.usernameInput = By.id('username');
        this.passwordInput = By.id('password');
        this.loginButton = By.className('fa-sign-in');
        this.flashMessage = By.id("flash");
    }

    async login(username, password) {
        let selectorUsername = this.usernameInput;
        let selectorPassword = this.passwordInput;
        let selectorLoginBtn = this.loginButton;
        driver.findElement(selectorUsername).sendKeys(username);
        driver.findElement(selectorPassword).sendKeys(password);
        driver.findElement(selectorLoginBtn).click();
    }

    async readFlashMessage(expectedMessage) {
        let selectorMessage = this.flashMessage;
        // await driver.findElement(selectorMessage).
        let eleActualMessage = await driver.wait(until.elementLocated(selectorMessage), 30000);
  

        let actualMessage = await eleActualMessage.getText();
        let formattedActualMessage = actualMessage.slice(0, -2);
        console.log(`formattedActualMessage: ${formattedActualMessage}`);
        
        assert.equal(expectedMessage, formattedActualMessage);
    }

}

module.exports = new LoginPage();