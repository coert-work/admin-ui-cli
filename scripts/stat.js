vorpal.command('stat')
  .description('Get some basic stats')
  .action((params, next) => {
    console.log(Object.keys(STACK));
    console.log(chalk.hex('#C0392B')('CPU:', os.cpus().length, 'MEMORY', os.totalmem(), 'FREE MEMORY', os.freemem()));
    next()
});