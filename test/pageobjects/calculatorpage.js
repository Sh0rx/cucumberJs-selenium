const { By, Key, Builder, until } = require("selenium-webdriver");
const BasePage = require('./basepage');
const assert = require('assert');

class CalculatorPage extends BasePage {

    constructor() {
        super();
        this.number1Input = By.id('number1');
        this.number2Input = By.id('number2');
        this.dropdownList = By.id('function');
        this.options = By.css('#function > option');
        this.calculateButton = By.id('calculate');
        this.resultText = By.id('answer');
    }

    async inputNumber1(num1) {
        let selectorNumber1 = this.number1Input;
        driver.findElement(selectorNumber1).sendKeys(num1);

        // let selectorResult = this.resultText;
        // let actualResult = await driver.findElement(By.id('answer')).getText();
        // console.log('INPUT NUMBER1 FINAL RESULT FINAL: ' + actualResult);
    }

    async inputNumber2(num2) {
        let selectorNumber1 = this.number2Input;
        driver.findElement(selectorNumber1).sendKeys(num2);
    }

    async clickDropdownList() {
        let selectorDropdown = this.dropdownList;
        driver.findElement(selectorDropdown).click();
    }

    async clickTimesOption() {
        let selectorOptions = this.options;    //ERROR AL LEER OPTIONS
        // let selectorOptions = By.css('#function > option');

        let optionList = await driver.findElements(selectorOptions);
        let option = 'times';
        let flag = false;
        // console.log('lenght: ' + optionList.length);

        for (let i = 0; i < optionList.length; i++) {
            // console.log('Opciones: ' + await optionList[i].getText());
            if (await optionList[i].getText() == option) {
                flag = true;
                await optionList[i].click();
            }
        }

        assert.equal(flag, true);
    }

    async clickCalculateButton() {
        let selectorCalculateButton = this.calculateButton;
        driver.findElement(selectorCalculateButton).click();
    }

    async validateResult(expectedResult) {
        console.log('VALIDATE RESULT');
        
        let selectorResult = this.resultText;
        let actualResult;

        try {
            actualResult = await driver.findElement(selectorResult).getText();
            console.log('FINAL RESULT: ' + actualResult);
        } catch {
            actualResult = await driver.findElement(selectorResult).getText();
            console.log('FINAL RESULT FINAL: ' + actualResult);
        }

        // actualResultElement = await driver.wait(until.elementLocated(selectorResult), 30000, 'Timed out after 30 seconds', 5000);
        // actualResult = await actualResultElement.getText();

        assert.equal(actualResult, expectedResult);

        console.log('VALIDATE RESULT FINAL: ');
    }
}

module.exports = new CalculatorPage();