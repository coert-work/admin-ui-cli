vorpal
.command('npm [argz...]')
.description('Run NPM commands in ./app folder')
.action((params, cb) => {
  shell.exec('cd ../app && npm ' + params.argz.join(' '));
  cb()
});