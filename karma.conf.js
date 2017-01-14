// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher')
    ],
    files: [
      'polyfills.browser.ts',
      'src/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'polyfills.browser.ts': ['webpack'],
      'src/test/*.spec.ts': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
};
