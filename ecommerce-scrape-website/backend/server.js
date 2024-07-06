const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('');

  const details = await page.evaluate(() => 
    Array.from(document.querySelectorAll('#a-page'), (e) => ({
        price : document.querySelector('.a-price-whole').innerText,
        title : document.querySelector('#productTitle').innerText,
        ratings: document.querySelector('#acrPopover').title,
        no_of_reviews: document.querySelector('#acrCustomerReviewText').innerText,

    })
    

  ));

  console.log(details);

  await browser.close();

}

run();