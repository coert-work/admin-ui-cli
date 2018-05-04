
// GENERATORS
// - note, filepaths are relative to index.js where its included - not this file

// Container
vorpal.command('create container [argz...]')
.description('Create container {name}')
.action((params, cb) => {

  const name = params.argz[0];
  let writePath = '../app/src/containers/';
  //wip
  if (params.argz[1] && params.argz[1] === 'at') { 
    /* render to subpath */
    writePath = writePath + params.argz[2];
  }

  const mod = require(`./templates/react/container`);
  writeFile(`${writePath}${name}/index.js`, mod.index(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/api.js`, mod.api(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/actions.js`, mod.actions(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/style.less`, mod.style(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/test.spec.js`, mod.test(name), (err) => { if (err) { console.log(err) } });
  cb();
});



// Component
vorpal.command('create component [argz...]')
.description('create component {name}')
.action((params, cb) => {

  const name = params.argz[0];
  const mod = require(`./templates/react/component`);

  let writePath = `${TARGET_PATH}/src/components/`;
  if (params.argz[1] && params.argz[1] === 'at') { 
    /* render to subpath */
    writePath = '../app/src/' + params.argz[2];
  }

  writeFile(`${writePath}${name}/index.js`, mod.index(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/style.less`, mod.style(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/test.spec.js`, mod.test(name), (err) => { if (err) { console.log(err) } });
  cb()
});


// Element
vorpal.command('create element [argz...]')
  .description('create element {name}')
  .action((params, cb) => {

  const name = params.argz[0];
  const mod = require(`./templates/react/element`);

  let writePath = `${TARGET_PATH}/src/elements/`;
  if (params.argz[1] && params.argz[1] === 'at') { 
    /* render to subpath */
    writePath = params.argz[2];
  }

  writeFile(`${writePath}${name}/index.js`, mod.index(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/style.less`, mod.style(name), (err) => { if (err) { console.log(err) } });
  writeFile(`${writePath}${name}/test.spec.js`, mod.test(name), (err) => { if (err) { console.log(err) } });
  cb()
});

// Element
vorpal.command('create mod[argz...]')
  .description('create mod {name}')
  .action((params, cb) => {

  const name = params.argz[0];

  writeFile(`${TARGET_PATH}/src/mods/${name}/index.js`, `export default { }`, (err) => { if (err) { console.log(err) } });
  writeFile(`${TARGET_PATH}/src/mods/${name}/test.spec.js`, `//TODO`, (err) => { if (err) { console.log(err) } });
  cb()
});
