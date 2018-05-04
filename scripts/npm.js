vorpal
.command('npm [argz...]')
.description(`Run NPM commands in ${TARGET} folder`)
.action((params, cb) => {
  shell.exec(`cd ${TARGET_PATH} && npm ` + params.argz.join(' '));
  cb()
});