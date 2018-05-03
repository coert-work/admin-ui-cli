vorpal.command('git push')
  .description('Commit your changes')
  .action((params, next) => {

    //todo -  run tests
    //todo - format and check code
    //todo - check git flow / conflicts before push

    shell.exec([
      'git status',
     // 'git add .'
     // 'git commit -m "$(w3m whatthecommit.com | head -n 1)"'
     // 'git push'
    ])

    next();
  })