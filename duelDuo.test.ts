import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/public/index.html')
})

afterAll(async () => {
    await driver.sleep(1000);
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw should give me a list of bots to choose from',async () => {
    const drawButton = await driver.findElement(By.xpath(`//button[@id='draw']`));

    drawButton.click();

    await driver.sleep(1000);

    const fiveBots = await driver.findElement(By.xpath(`//div[@id='choices']`));

    const isDisplayed = fiveBots.isDisplayed();
  
    expect(isDisplayed).toBeTruthy();
})

test('be able to put a bot in the duo',async () => {
    const drawButton = await driver.findElement(By.xpath(`//button[@id='draw']`));

    drawButton.click();

    await driver.sleep(1000);

    const addDuoButton = await driver.findElement(By.xpath(`//button[@class='bot-btn']`));

    addDuoButton.click();

    await driver.sleep(1000);

    const duoBot = await driver.findElement(By.xpath(`//div[@id='player-duo']`));

    const isDisplayed = duoBot.isDisplayed();
  
    expect(isDisplayed).toBeTruthy();
})