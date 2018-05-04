
// Check for base dependencies
if (!shell.which('git')) { shell.echo('please install git'); shell.exit(1) }


/** STARTUP **/
console.log("");
console.log("");
console.log(chalk.white('========================================'));
console.log("");
console.log(chalk.yellow('         Welcome to the CLI'));
console.log("");
console.log(chalk.white('========================================'));
console.log("");
console.log(chalk.yellow('   Type "help" for a list of commands'));
console.log("");
console.log(chalk.white('----------------------------------------'));
console.log("");





// StartUp
vorpal.command('startup')
.description('run first time installs')
.action((params, cb) => {

  if (fs.existsSync(`${TARGET_PATH}/node_modules`)) {
    // console.log('Everything previously installed');
  } else {
    console.log(chalk.white('----------------------------------------'));
    console.log(chalk.yellow('First Time? Lets first install your APP dependencies ... '));
    console.log(chalk.yellow('Hold on to your horses! this may take a while .... '));
    console.log(chalk.white('----------------------------------------'));

    shell.exec(`cd ${TARGET_PATH} && npm i`);
    console.log(chalk.yellow('Everything installed, type   npm start   to get going ;) '));
  }
  cb()
});
