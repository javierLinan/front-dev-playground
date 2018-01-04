const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const PKG = require('./package.json'); // so we can get the version of the project
const SCREENSHOT_PATH = './node_modules/nightwatch/screenshots/' + PKG.version + '/';

const LOCAL_URL = 'http://localhost:3000';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  src_folders: [
    'test/e2e', // Where you are storing your Nightwatch e2e tests
  ],
  output_folder: './reports', // reports (test outcome) output by nightwatch
  selenium: {
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444, // standard selenium port
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },
  test_workers: { enabled: true, workers: 'auto' }, // perform tests in parallel where possible
  test_settings: {
    default: {
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      screenshots: {
        enabled: false, // save screenshots to this directory (excluded by .gitignore)
        path: SCREENSHOT_PATH,
      },
      username: process.env.SAUCE_USERNAME, // if you want to use Saucelabs remember to
      access_key: process.env.SAUCE_ACCESS_KEY, // export your environment variables (see readme)
      globals: {
        waitForConditionTimeout: 10000, // wait for content on the page before continuing
        launch_url: 'http://localhost', // we're testing a Public or "staging" site on Saucelabs
      },
      desiredCapabilities: {
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER, // needed for sauce-connect, i.e for testing localhost on saucelabs
        build: `build-${process.env.TRAVIS_JOB_NUMBER}`, // needed for sauce-connect
      },
    },
    local: {
      silent: true,
      screenshots: {
        enabled: true, // if you want to keep screenshots
        path: './screenshots', // save screenshots here
      },
      globals: {
        waitForConditionTimeout: 15000, // sometimes internet is slow so wait.
        launch_url: LOCAL_URL,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
            '--window-size=640,1136', // iphone 5
          ],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    chrome: {
      // your local Chrome browser (chromedriver)
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.0',
      },
    },
  },
};
