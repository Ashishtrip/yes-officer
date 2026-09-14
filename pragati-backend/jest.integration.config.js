/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = require('./jest.config');

module.exports = {
  ...config,
  testMatch: ['**/?(*.)+(integration.test).ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
