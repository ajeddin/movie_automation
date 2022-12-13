const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async ()=> {
    await driver.quit()
})

test('HELLO WORLD', async()=>{
    await driver.findElement(By.xpath('//input')).sendKeys('Inception')
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//button[1]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//span[1]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//span[1]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("Inception")).click()
    await driver.sleep(2000)
    

})