
// Kill All node processes
vorpal.command('kill')
.description('kill all node.js processes and exit')
.action((params, cb) => {
  shell.exec(`killall -KILL node`)
  cb()
});