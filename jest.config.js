require.resolve('babel-jest');
require.resolve('jest-environment-jsdom');

module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  globalSetup: '<rootDir>/jest.global.js',
  setupFilesAfterEnv: ['<rootDir>/v2/ui/tests/setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/**/*.test.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/tools/codegen-graph-ts/**/*.d.{js,jsx,ts,tsx}',
    '<rootDir>/tools/generate-subgraph-query/**/*.d.{js,jsx,ts,tsx}',
    '<rootDir>/v1/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/v2/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/v3/theme/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/*.test.{js,jsx,ts,tsx}',
  ],
};
