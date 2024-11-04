const { Builder, By, until } = require('selenium-webdriver');

async function writeReview() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://prestashop.qatestlab.com.ua/ru/');

        const productLinks = await driver.findElements(By.css('.product_img_link'));
        const randomIndex = Math.floor(Math.random() * productLinks.length);
        console.log(123);
        await productLinks[randomIndex].click();

        const reviewButton = await driver.wait(until.elementLocated(By.id('new_comment_tab_btn')), 10000);
        await driver.wait(until.elementIsVisible(reviewButton), 5000);
        await reviewButton.click();

        const reviewForm = await driver.wait(until.elementLocated(By.className('new_comment_form_content')), 10000);

        const randomRating = Math.floor(Math.random() * 5) + 1;
        const starElement = await driver.findElement(By.css(`.star_on:nth-child(${randomRating})`));
        await starElement.click();

        const titleField = await driver.findElement(By.id('comment_title'));
        await titleField.sendKeys(`feedback for ${randomIndex + 1}`);

        const contentField = await driver.findElement(By.id('content'));
        await contentField.sendKeys('good!');

        const submitButton = await driver.findElement(By.id('submitNewMessage'));
        await driver.wait(until.elementIsVisible(submitButton), 5000);
        await submitButton.click();

        console.log(`used product: ${randomIndex + 1}.`);

    } catch (error) {
        console.error('error:', error);
    } finally {
        await driver.quit();
    }
}

writeReview();
