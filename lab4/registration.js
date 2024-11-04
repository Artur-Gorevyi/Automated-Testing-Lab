const { Builder, By, until } = require('selenium-webdriver');

async function registerOnPage() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        function generateRandomEmail() {
            const randomUsername = generateRandomString(10);
            const randomDomain = generateRandomString(5);
            return `${randomUsername}@${randomDomain}.com`;
        }

        await driver.get('http://prestashop.qatestlab.com.ua/en/authentication?back=my-account');

        const emailField = await driver.wait(until.elementLocated(By.id('email_create')), 10000);
        await driver.wait(until.elementIsVisible(emailField), 5000);
        await driver.executeScript("arguments[0].scrollIntoView(true);", emailField);
        await driver.wait(until.elementIsEnabled(emailField), 5000);

        const randomEmail = generateRandomEmail();
        await emailField.sendKeys(randomEmail);

        const submitButton = await driver.findElement(By.id('SubmitCreate'));
        await driver.wait(until.elementIsVisible(submitButton), 5000);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitButton);
        await submitButton.click();

        await driver.wait(until.elementLocated(By.id('account-creation_form')), 10000);

        await driver.findElement(By.id('id_gender1')).click();
        await driver.findElement(By.id('customer_firstname')).sendKeys('John');
        await driver.findElement(By.id('customer_lastname')).sendKeys('Doe');
        await driver.findElement(By.id('passwd')).sendKeys('password123');
        await driver.findElement(By.id('newsletter')).click();
        await driver.findElement(By.id('optin')).click();

        const registerButton = await driver.findElement(By.id('submitAccount'));
        await driver.wait(until.elementIsVisible(registerButton), 5000);
        await driver.executeScript("arguments[0].scrollIntoView(true);", registerButton);
        await registerButton.click();

        console.log(`email: ${randomEmail}`);

    } catch (error) {
        console.error('error: ', error);
    } finally {
        //await driver.quit();
    }
}

registerOnPage();
