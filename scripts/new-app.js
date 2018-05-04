/**
 * @method new-app
 * @description creates a new app
 */


vorpal.command('new-app')
.description('create a brand new app')
.action((params, next) => {

  if (fs.existsSync(TARGET_PATH)) {

    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )
    console.log( chalk.hex('#ff0000')('APP FOLDER EXISTS ::'), `please delete/rename the old ${TARGET} folder to continue` )
    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )

  } else {

    shell.cp('-Rf', './templates/app/app/', TARGET_PATH + '/');
    console.log( chalk.hex('#FFF')('---------------------------------------------------------------------------') )
    console.log( chalk.hex('#FFF')(`SUCCESS :: New Project created. check the new ${TARGET} folder` ) );
    console.log( chalk.hex('#FFF')('---------------------------------------------------------------------------') )

    vorpal.exec('startup');
    vorpal.exec('app');
  }
  next();
})