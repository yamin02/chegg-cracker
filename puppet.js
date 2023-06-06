
//   const browser = await puppeteer.launch({
//    //executablePath: '/usr/bin/chromium',
//   executablePath: '/usr/bin/brave-browser',
//  //  devtools: true,
//    headless:false ,
//    slowMo: 250 ,
//   // userDataDir: '/home/yamin/.config/chromium' 
//   });


const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ 
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
        ],
    headless: false  ,
    executablePath: '/usr/bin/chromium', 

}).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage();
  await page.goto('https://www.chegg.com/homework-help/questions-and-answers/co2-cartridge-used-propel-small-rocket-cart-compressed-co2-stored-pressure-412-mpa-abs-tem-q17110751')
 // await page.waitForTimeout(5000)
  //await browser.close()
})