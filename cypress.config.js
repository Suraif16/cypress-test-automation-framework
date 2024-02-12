const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vqga8j',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js, jsx, tsx, ts, feature}',
    chromeWebSecurity: false,
  },
});
