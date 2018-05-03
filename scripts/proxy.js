vorpal.command('proxy')
.description('creates a proxy server with cors-anywhere')
.action((params, next) => {

    const cors_proxy = require('cors-anywhere');
    const host = process.env.HOST || 'localhost';
    const port = process.env.PORT || 8001;

    STACK.PROXY = cors_proxy.createServer({
        originWhitelist: []
    }).listen(port, host, () => {
        console.log(chalk.hex('#00FFFF')(`Running API PROXY for CORS on ${host} :: ${port}`))
    });

    next();
})
