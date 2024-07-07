
const puppeteer = require('puppeteer');

const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000

app.get('/products', (req, res) => {
    const request = (req.url);
    const productUrl = request.split('?url=')[1];
    console.log((decodeURIComponent(productUrl)));
    run(decodeURIComponent(productUrl))
    .then((response) => res.send(response));
    // console.log(details);
    
//   res.send(details)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function run(productUrl) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${productUrl}`);

  const details = await page.evaluate(() => 
    Array.from(document.querySelectorAll('#a-page'), (e) => ({
        price : document.querySelector('.a-price-whole').innerText,
        title : document.querySelector('#productTitle').innerText,
        ratings: document.querySelector('#acrPopover').title,
        no_of_reviews: document.querySelector('#acrCustomerReviewText').innerText,

    })
    

  ));

  
//   console.log(details);

  await browser.close();

  return details;


}

// run();
