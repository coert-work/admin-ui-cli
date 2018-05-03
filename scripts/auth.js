vorpal.command('login')
  .option('become a superuser')
  .action((args, next) => {

    vorpal.activeCommand.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'enter your username ::  ',
    },
    {
      type: 'input',
      name: 'pass',
      message: 'enter your password ::  ',
    },
  ], res => {
      // todo drive via api
      if (res.user === 'admin' && res.pass === 'superuser' ) {
        vorpal.activeCommand.log(`logged in :: ${res.user} `);
      } else {
        vorpal.activeCommand.log(`failed login `);
      }
      next();
    });
  });