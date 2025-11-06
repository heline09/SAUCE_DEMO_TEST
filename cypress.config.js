const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false,             
    html: true,                   
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