const playwright = require('playwright');
const Test = require('./WebElements');
const axios = require('axios').default;
let WebElements = new Test();
module.exports = async () => {

    const browser = await playwright['chromium'].launch();
    const page = await browser.newPage();
    await page.goto(WebElements.url);
    await page.click('[href="/ajax"]');  //click Ajax
    //await page.screenshot({ path: `screenshot10111.png` });
    await page.click("#ajaxButton");
    await page.screenshot({ path: `screenshot10111.png` });
    let v1, v2;
    setTimeout(async () => {   //waiting  15 second 
        page.$('#content>p').then(async res => {
            v1 = await res.innerHTML()   //geting UI text
        });
        //  await page.screenshot({ path: `screenshot10113.png` });
    }, 15000)
    let url = "http://uitestingplayground.com/ajaxdata";
    axios.get(url).then(res => {
        //console.log(res.data);  //geting response 
        if (v1 === res.data) {
            console.log(true + "   text and response is equal"); //hamematum  Ui-i text@ Responsi het 
        }
        else {
            console.log(false);
        }
    })
}




