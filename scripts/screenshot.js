vorpal.command('screenshot')
  .description('Takes puppeteer screenshots')
  .action((params, next) => {
    
  const puppeteer = require('../app/node_modules/puppeteer');

  const domain = 'http://localhost:3000';

  const delay = time => {
    return new Promise(function(resolve) { 
      setTimeout(resolve, time)
    });
  }

  (async() => {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 1200});

    const links = [
      '/',
      '/orders/leadtime-orders',
      '/orders/draft-shipments',
      '/orders/confirmed-shipments',
      '/orders/shipped-shipments',
      '/orders/replenishment-orders',
      '/404'
    ];

    const date = new Date().toString().split('GMT')[0];
    const folder = date.split('2018')[0];
    writeFile(`../app/docs/snapshots/${folder}/folder.md`, `Folder generated initially for snapshot testing at: \n \n ${new Date()}`);

    for (let i = 0; i < links.length; i ++) {
      let formattedName = links[i].replace(domain, '');
      formattedName = formattedName.split('/').join('-');
      await page.goto(domain + links[i], { waitFor: 2000 });
      await page.screenshot({ path: `../app/docs/snapshots/${folder}/${formattedName}.png` });
    }

    await browser.close();
  })();

  next()
})