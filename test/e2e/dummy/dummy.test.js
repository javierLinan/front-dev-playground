module.exports = {
  beforeEach: browser => {
    browser
      .url(browser.globals.launch_url)
      .waitForElementVisible('body')
      .waitForElementVisible('#root');
  },
  'Application assert Title': browser => {
    browser.assert.title('React App').end();
  },
};
