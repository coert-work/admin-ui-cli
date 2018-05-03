/**
 * @method new-app
 * @description creates a new app
 */


vorpal.command('new-app')
.description('create a brand new app')
.action((params, next) => {

  if (fs.existsSync('../.git')) {
    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )
    console.log( chalk.hex('#ff0000')('GIT FOLDER EXISTS ::'), 'please delete the original .git folder' )
    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )
  }

  if (fs.existsSync('../app')) {

    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )
    console.log( chalk.hex('#ff0000')('APP FOLDER EXISTS ::'), 'please delete/rename the old app folder to continue' )
    console.log( chalk.hex('#ff0000')('---------------------------------------------------------------------------') )

  } else {

    shell.cp('-Rf', './templates/app/app/', '../app/');
    console.log( chalk.hex('#FFF')('---------------------------------------------------------------------------') )
    console.log( chalk.hex('#FFF')('SUCCESS :: New Project created. check your new ./app folder' ) );
    console.log( chalk.hex('#FFF')('---------------------------------------------------------------------------') )

    vorpal.exec('startup');
    vorpal.exec('app');
  }
  next();
})