const playwright = require('playwright');
const Test = require('./WebElements');
let WebElements = new Test();
module.exports = async () => {
    let obj = {
        chromium: '',
        firefox: ''
    }
    for (const browserType of ['chromium', 'firefox']) {    //First Browser go to Chrome  , and last go to Firefox   .
        const browser = await playwright[browserType].launch(); //create browser
        const context = await browser.newContext();
        const page = await context.newPage(); //create page
        await page.goto(WebElements.url);
        await page.click(WebElements.DynamicId);   // click   Dinamic Id
        let dd_handle = await page.$(WebElements.Button_with_Dynamic_ID);  // click Button with Dynamic ID
        //page.screenshot({ path: `screenshot1.png` });
        let value = await dd_handle.getAttribute("id"); // get Id value
        obj[browserType] = value; //obj[0]==First Id value , obj[1]==Last Id Value
        const { chromium } = require('playwright');
    }
    if (obj['chromium'] === obj['firefox']) console.log("Id is Dinamic");
    else console.log("Id isn't Dinamic");
}