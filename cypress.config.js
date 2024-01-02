const { defineConfig } = require('cypress');

//WEB - This settings can be overwritten by the viewport settings from the package.json file
module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});