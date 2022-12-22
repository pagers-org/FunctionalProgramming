const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
    baseUrl: "http://localhost:5173/",
  },
});
