#!/usr/bin/env node
const vorpal = require('vorpal')();
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const shell = require('shelljs');
const { spawn, exec } = require('child_process');
const chalk = require('chalk');
const open = require('open');
const path = require('path')
const os = require('os')
const argv = require('yargs').argv

// fresh slate
console.clear();

// Child process stack
const STACK = {
  // APP: false,
  // DOCS: false,
  // SERVER: false,
  // TEST: false,
  // PROXY: false
};

const TARGET = argv.t || 'app'
const TARGET_PATH = '../' + TARGET

// Exit handler
process.on('exit', code => {
  console.clear();
  shell.exec(`killall -KILL node`);
});


/**
 * @method include
 * @param {string} file_ file to include
 */
function include(file_) { with(global) { eval(fs.readFileSync(file_) + '')}}

/**
 * @method writeFile
 * @description File Write helper with overwrite check
 */
function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) { return cb(err) }
    if (fs.existsSync(path)) {
      console.log(chalk.red('File exists @ :: ' + path))
  } else {
    fs.writeFile(path, contents, cb);
  }
  })
}

/**
 * @method copyFile
 * @param {string} source 
 * @param {string} target 
 * @param {function} cb 
 */
function copyFile(source, target, cb) {
  let cbCalled = false;
  const rd = fs.createReadStream(source);
  rd.on("error", err => { done(err) });
  const wr = fs.createWriteStream(target);
  wr.on("error", err => { done(err) });
  wr.on("close", ex => { done() });
  rd.pipe(wr);
  function done(err) { if (!cbCalled) { cb(err); cbCalled = true } }
}



/**
 * @method checkDep
 * @param {string} name of package
 * @return {boolean}
 */
function checkDep(name, cb) {
  const nameReg = new RegExp(name, 'gi');
  shell.exec(`npm list --depth=0 | grep ${name}`, (code, result) => {
    if(code === 1) {

      console.log(chalk.yellow('------------------------------------------------------------------'));
      console.log(chalk.yellow(`dependency ${name} not yet installed, let's install it for you ...`));
      console.log(chalk.yellow('------------------------------------------------------------------'));

      shell.exec(`npm install -S ${name}`);

    } else {
      console.log(`${name} installed`);
    }
  });
  (cb) && cb();
}




// include scripts
include('./scripts/startup.js');
include('./scripts/proxy.js');

include('./scripts/stat.js');
include('./scripts/clear.js');
include('./scripts/kill.js');

include('./scripts/app-runners.js');
include('./scripts/new-app.js');
include('./scripts/generators.js');

include('./scripts/test.js');
include('./scripts/npm.js');
include('./scripts/plato.js');

include('./scripts/screenshot.js');
include('./scripts/auth.js');

include('./scripts/git.js');


// CLI init
vorpal.delimiter(`$ui<${TARGET}>: `).show();

if (fs.existsSync(TARGET_PATH)) {

  vorpal.exec('startup');
  vorpal.exec('app');
  vorpal.exec('proxy');

} else {
  console.log('');
  console.log('=============================================');
  console.log('ALERT :: no APP detected, skipping launch');
  console.log('=============================================')
}