const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5; // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
    console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('Display top of stack', async () => {

    let push = await driver.findElement(By.id('push'));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("TopOfTheSTack");
    await alert.accept();

    let peek = await driver.findElement(By.id('peek'));
    peek.click();
    let peekValue = await driver.findElement(By.id('top_of_stack')).getText();

    expect(peekValue).toEqual("TopOfTheSTack");
});
