const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');
const { Console } = require('console');
const { By, Key, Builder } = require("selenium-webdriver");
require('chromedriver');

let driver = new Builder().forBrowser("chrome").build();

module.exports = {

    url: 'https://testpages.herokuapp.com/styled/calculator',

    // buildDriver: async () => {
    //     driver = await new Builder().forBrowser("chrome").build();
    // },

    open: async (webpageURL) => {
        // console.log(url);
        await driver.get(webpageURL);
    },

    close: async() => {
        await driver.close();
    },

    // WebElements Locator
    elements: {
        number1Input: By.id('number1'),
        number2Input: By.id('number2'),
        dropdownList: By.id('function'),
        options: By.css('#function > option'),
        calculateButton: By.id('calculate'),
        resultText: By.id('answer')
    },

    // Actions on WebElements
    inputNumber1: function (number1) {
        var selectorNumber1 = this.elements.number1Input;

        driver.findElement(selectorNumber1).sendKeys(number1);
    },

    inputNumber2: function (number2) {
        var selectorNumber2 = this.elements.number2Input;

        driver.findElement(selectorNumber2).sendKeys(number2);
    },

    clickDropdownList: function () {
        var selectorDropdown = this.elements.dropdownList;

        driver.findElement(selectorDropdown).click();
    },

    clickTimesOption: async () => {
        // let selectorOptions = this.elements.options;    //ERROR AL LEER OPTIONS
        let selectorOptions = By.css('#function > option');

        let optionList = await driver.findElements(selectorOptions);
        let option = 'times';
        let flag = false;
        console.log('lenght: '+ optionList.length);

        for (let i = 0; i<optionList.length; i++) {
            console.log('Opciones: '+await optionList[i].getText());
            if (await optionList[i].getText() == option) {
                flag = true;
                await optionList[i].click();
            }
        }

        assert.equal(flag, true);
    },

    // getOption: function() {
    //     return this.elements.options;
    // },

    clickCalculateButton: function () {
        var selectorCalculateButton = this.elements.calculateButton;

        driver.findElement(selectorCalculateButton).click();
    },

    validateResult: async (expectedResult) => {
        console.log('validateResult');
        // let selectorResult = By.id('answer');
        // let actualResult = await driver.findElement(By.id('answer')).getText();    //Get answer
        let actualResult = 0;
        console.log('expected-actual: '+expectedResult+'-'+actualResult);

        assert.equal(actualResult, expectedResult);

        await driver.quit();
    }

}