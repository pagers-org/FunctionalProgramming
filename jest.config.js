/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'json', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};

module.exports = config;
