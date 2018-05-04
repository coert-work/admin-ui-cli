// App
vorpal.command('doc')
  .description('Start Plato & esdoc generator')
  .action((params, cb) => {

  var plato = require('plato');
  const src = `${TARGET_PATH}/src/**/*.js`;
  const outputDir = `${TARGET_PATH}/docs/plato`;

  let platoArgs = {
    title: 'Takealot admin UI',
    eslint: {
      plugins: ["react"],
      rules: {
        semi: 0
      },
      "env": {
        "browser": true,
        "node": true,
        "es6": true
      },
      parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "modules": true,
          "spread": true,
          "restParams": true,
          "jsx": true
        }
      }
    }
  };

  //you can use the reports in the callback.
  function callback(reports) {

    let overview = plato.getOverviewReport(reports);
    let {total, average} = overview.summary;

    let output = `total
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`;

    console.log(output);
  }

  //usage is plato.inspect
  STACK.PLATO = plato.inspect(src, outputDir, platoArgs, callback);

  open(`${outputDir}/index.html`);

  // run esdoc as well
  shell.exec(`cd ${TARGET_PATH} && npm run doc`);
  setTimeout(() => {
    open(`${TARGET_PATH}/docs/esdoc/index.html`);
  }, 3000)

  cb()
});
