// Maakt folder.pdf van folder.html (A4, 4 pagina's).
// Gebruik: node folder/maak-pdf.js
const path = require('path');
let pw;
try { pw = require('playwright'); }
catch (e) { pw = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright'); }

(async () => {
  const browser = await pw.chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'folder.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(__dirname, 'folder.pdf'), preferCSSPageSize: true, printBackground: true });
  await browser.close();
  console.log('folder/folder.pdf gemaakt');
})();
