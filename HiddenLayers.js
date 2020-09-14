const playwright = require('playwright');
const Test = require('./WebElements');
let WebElements = new Test();
module.exports = async () => {

    const browser = await playwright['chromium'].launch();
    const page = await browser.newPage();
    await page.goto('http://uitestingplayground.com/');
    await page.click('[href="/hiddenlayers"]'); //click  hiddenlayers
    //await page.screenshot({ path: `screenshot10111.png` });
    let First = await page.$eval('#spa > .spa-view:last-child > button', button => window.getComputedStyle(button).backgroundColor); //get WebElement background color 
    await page.click('#spa > .spa-view:last-child > button'); //click last button
    let Second = await page.$eval('#spa>.spa-view:last-child>button', button => window.getComputedStyle(button).backgroundColor); //get WebElement background color 
    console.log(First, Second);

    if (First === Second) console.log(true);
    else console.log(false + "    is one green button");
}


