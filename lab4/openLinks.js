const { Builder, By } = require('selenium-webdriver');

async function getAndVisitLinks() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://prestashop.qatestlab.com.ua/en/');

        let linkElements = await driver.findElements(By.css('a'));
        let links = [];
        
        for (let linkElement of linkElements) {
            let href = await linkElement.getAttribute('href');
            if (href && (href.startsWith('http://') || href.startsWith('https://')) && !links.includes(href)) {
                links.push(href);
                if (links.length >= 10) break;
            }
        }

        for (let link of links) {
            console.log(`Переход по ссылке: ${link}`);
            await driver.get(link);

            await driver.sleep(2000);
            
            await driver.navigate().back();
        }
    } finally {
        await driver.quit();
    }
}

getAndVisitLinks();
