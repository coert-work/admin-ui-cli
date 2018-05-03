

module.exports = {

  preset: "jest-puppeteer-preset",

  testRegex: "automation.spec.js$",
  //testRegex: "e2e.spec.js$",
  resolver: "jest-webpack-resolver",
  jestWebpackResolver: {
    webpackConfig: './webpack.config.js'
  },

  globalSetup: './build/configs/setup.js',
  globalTeardown: './build/configs/teardown.js',
  testEnvironment: './build/configs/puppeteer_environment.js',

  collectCoverage: true,
  coverageDirectory: "docs/coverage",

  //automock: true,

  // transform: {
  //   "^.+\\.js$": "babel-jest"
  // },
  
  // testEnvironment: "enzyme",
  // testEnvironmentOptions: {
  //   enzymeAdapter: "react16"
  // },
  // setupTestFrameworkScriptFile: "./setupTests.js",
  // modulePaths: [
  //   "src"
  // ],
  // unmockedModulePathPatterns:[
  //   "react",
  //   "react-dom",
  //   "react-addons-test-utils",
  //   "enzyme",
  //   "lodash",
  //   "object.assign",
  //   "define-properties",
  //   "function-bind",
  //   "object-keys",
  //   "fetch"
  // ]
}