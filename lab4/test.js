const { Builder, By, Key, until } = require('selenium-webdriver');
const math = require('mathjs');

(async function testMathPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://suninjuly.github.io/math.html');

        const xValueElement = await driver.findElement(By.id('input_value'));
        const xValue = await xValueElement.getText();
        console.log('Значение x:', xValue);

        const x = parseFloat(xValue);
        const answer = Math.log(Math.abs(12 * Math.sin(x))); // ln(abs(12*sin(x)))
        console.log('Розраховане значення:', answer);

        const answerInput = await driver.findElement(By.id('answer'));
        await answerInput.sendKeys(answer.toString());

        const robotCheckbox = await driver.findElement(By.id('robotCheckbox'));
        await robotCheckbox.click();

        const robotsRuleRadio = await driver.findElement(By.id('robotsRule'));
        await robotsRuleRadio.click();

        const submitButton = await driver.findElement(By.css('button[type="submit"]'));
        await submitButton.click();

        await driver.wait(until.alertIsPresent(), 10000);

        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        console.log('alert:', alertText);

        await alert.accept();

    } catch (error) {
        console.error('errro:', error);
    } finally {
        await driver.quit();
    }
})();
