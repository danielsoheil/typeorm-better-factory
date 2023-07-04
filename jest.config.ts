module.exports = {
  clearMocks: true,
  maxWorkers: 1,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  setupFilesAfterEnv: ['./test/setup/jest.setup.ts'],
  coveragePathIgnorePatterns: ['./node_modules', './test'],
  collectCoverage: true,
};
