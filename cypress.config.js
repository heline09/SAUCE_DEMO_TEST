const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // folder where reports will be saved
    overwrite: false,             // create new report each run
    html: true,                   // generate HTML report
    json: true
  },
  defaultCommandTimeout: 6000,
  e2e: {
    env: {
      url: "https://www.saucedemo.com/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/**/*.js',
  },
});