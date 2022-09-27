const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');
const { By, Key, Builder } = require("selenium-webdriver");
require('chromedriver');

// let driver = await new webdriver.Builder().forBrowser('chrome').build();
let driver;

BeforeAll(async () => {
    console.log("Inside BeforeAll");
    driver = await new Builder().forBrowser("chrome").build();
});

Before(function () {
    console.log("Inside Before");
});

After(function () {
    console.log("Inside After");
});

AfterAll(async () => {
    console.log("Inside AfterAll");
    await driver.quit();
});

Given('I open {string}', async (webpageURL) => {
    await driver.get(webpageURL);
});

When('I multiply {int} times {int}', async (num1, num2) => {
    await driver.findElement(By.id('number1')).sendKeys(num1);      //Introduce first number
    await driver.findElement(By.id('number2')).sendKeys(num2);      //Introduce second number

    await driver.findElement(By.id('function')).click();            //Click dropdown list
    // let dropdown = driver.findElement(By.id("function"));
    // await dropdown.findElement({value:'times'}).click();
    // await driver.findElement(By.linkText("times")).click();  //Select 'times' option
    // await driver.findElement(By.xpath("/html/body/div/div[3]/form/div[1]/select/option[2]")).click();

    let options = await driver.findElements(By.css('#function > option')); //Save section options

    let option = 'times';
    let flag = false;

    // for (let i of elements) {
    for (let i=0; i<options.length; i++) {
        if (await options[i].getText() == option) {
            flag = true;
            // childNumber = i+1;
            // let optionCSS = '#function > option:nth-child(' + childNumber + ')'
            // console.log('optionCSS: ' + optionCSS);
            // await driver.findElement(By.css(optionCSS)).click();
            await options[i].click();           //Click 'times' option
        }
    }
    assert.equal(flag, true);

    await driver.findElement(By.id("calculate")).click();           //Click 'calculate' button
});

Then('the answer should be {int}', async (expectedResult) => {
    let actualResult = await driver.findElement(By.id("answer")).getText();    //Get answer

    assert.equal(actualResult, expectedResult);
});