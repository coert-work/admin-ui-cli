vorpal.command('test')
  .description('Run App tests')
  .action((params, cb) => {
    STACK.TEST = exec('cd ../app && npm test');
    STACK.TEST.stdout.on('data', data => { console.log(chalk.hex('#AF7AC5')(data)) });
    STACK.TEST.stderr.on('data', data => { console.error(chalk.hex('#AAB7B8')(data)) });
    cb()
});