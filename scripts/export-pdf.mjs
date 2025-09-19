import puppeteer from 'puppeteer';

const url = 'http://localhost:3000/CV/';
const out = 'cv.pdf';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.emulateMediaType('print'); // включаем print-правила
await page.goto(url, { waitUntil: 'networkidle0' });

await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true, // уважает @page
  margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
});

await browser.close();
console.log('Saved →', out);