const { Given, When, Then, Before, After, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');
const {By, Key, Builder} = require("selenium-webdriver");
require('chromedriver');

// let driver = await new webdriver.Builder().forBrowser('chrome').build();
let driver = new Builder().forBrowser("chrome").build();


Before(function () {
    console.log("Inside Before");
});

After(async () => {
    console.log("Inside After");
    // await driver.quit();
});

AfterAll(async () => {
    console.log("Inside AfterAll");
    await driver.quit();
});

Given('I open {string}', async (string) => {
    await driver.get('https://testpages.herokuapp.com/styled/calculator');
});

When('I multiply 7 times {int}', async (num2) => {
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/div[1]/input[1]")).sendKeys("7");    //Introduce first number
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/div[1]/input[2]")).sendKeys(num2);    //Introduce second number
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/div[1]/select/option[2]")).click();   //Select 'times' option
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/div[2]/input")).click();              //Click 'calculate' button
    // await driver.quit();

    // this.actualResult = num1 * num2;
});

Then('the answer should be {int}', async (expectedResult) => {
    let actualResult = await driver.findElement(By.xpath("/html/body/div/div[3]/div/p/span")).getText();    //Get answer

    assert.equal(actualResult, expectedResult);
});