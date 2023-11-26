
const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   viewportHeight: 880,
//   viewportWidth: 1280,
//   projectId: "5ztq8z",
//   e2e: {
//     setupNodeEvents(on, config) {},
//   },
// });

module.exports = defineConfig({
  viewportHeight: 860,
  viewportWidth: 410,
  projectId: "5ztq8z",
  e2e: {
    setupNodeEvents(on, config) {},
  },
});