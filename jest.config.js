module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    }
  };
  