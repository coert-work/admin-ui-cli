vorpal.command('app')
  .description('Start App')
  .action((params, cb) => {

    STACK.APP = exec(`cd ${TARGET_PATH} && npm run app-start`, {async:true}, (err) => {
      if (err) { console.error(err); return }
    });

    STACK.APP.stdout.on('data', data => {
      console.log(chalk.hex('#0099CC')(data))
    });

    STACK.APP.stderr.on('data', data => {
      console.error(chalk.hex('#0099CC')(data))
    });

    STACK.APP.on('exit', code => {
      console.log('APP exited with code ' + code);
    });

    console.log(chalk.hex('#0099CC')('DEV SERVER running on localhost:3000 :: PID', STACK.APP.pid))
    cb();
  });
