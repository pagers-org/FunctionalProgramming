import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
  },
});
