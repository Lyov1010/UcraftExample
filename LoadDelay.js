const playwright = require('playwright');
const Test = require('./WebElements');
let WebElements = new Test();
module.exports = async () => {

    const browser = await playwright['chromium'].launch();
    const page = await browser.newPage();
    await page.goto(WebElements.url);
    await page.click(WebElements.LoadDelay);  //Click loadDelay

    await Promise.all([
        page.waitForSelector(WebElements.Button_Appearing_After_Delay),  // spasel minchev es Web element@ haytnvi 
        // page.screenshot({ path: `screenshot1.png` }), //zut screenshot im hamar 
        await page.click(WebElements.Button_Appearing_After_Delay),//click "Button Appearing After Delay"
        console.log(true + " WebElement  is appear"),
    ]);
    await browser.close();
}
