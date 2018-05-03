vorpal.command('clear')
.description('clear console')
.action((params, cb) => {
  console.clear()
  cb()
});