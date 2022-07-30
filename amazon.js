const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://amazon.com");

  try {
    await page.click("[data-action-params]"); // click on the popup
    await page.click("text=Today's Deals"); // click on Today's Deals
  } catch (i) {} // try catch - if one of two elements will not popup, the code will keep going

  await page.click("[data-testid='carousel-7BDB6437BDF538949C5F5A84C9EDA7EE']"); // click on Fashion
  await page.click(".a-dropdown-prompt"); // click on selector "Custom"
  await page.click("#sorting_dropdown0_4"); // click on Price: High to Low
  await page.click("[data-deal-id='a7e1befc']"); // click on the item
  await page.click("#color_name_1_price"); // click on another color
  await page.click("#color_name_0_price"); // click on first color
  await page.click("#buy-now-button"); // click on 2nd picture
  await page.locator("#ap_email").fill("andresmelov@yahoo.ca"); // fill in the email
  await page.click("#continue"); // click Continue
  await page.click("#ap_change_login_claim"); // click Change

  await page.waitForTimeout(5000); //!remove before submityting

  await browser.close();
})();
