const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');
const { By, Key, Builder } = require("selenium-webdriver");
require('chromedriver');

const calculatorPage = require('../../pageobjects/calculator.page');

let driver;

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
    // await driver.quit();
});

Given('I open {string}', async (webpageURL) => {
    await calculatorPage.open(webpageURL);
});

When('I multiply {int} times {int}', async (num1, num2) => {
    await calculatorPage.inputNumber1(num1);                //Introduce first number
    await calculatorPage.inputNumber2(num2);                //Introduce second number

    await calculatorPage.clickDropdownList();               //Click dropdown list
    await calculatorPage.clickTimesOption();                //Click 'times' option 

    await calculatorPage.clickCalculateButton();            //Click 'calculate' button
    
});

Then('the answer should be {int}', async (expectedResult) => {
    // let actualResult = await driver.findElement(By.id("answer")).getText();    //Get answer
    // assert.equal(actualResult, expectedResult);
    
    await calculatorPage.validateResult(expectedResult);
});