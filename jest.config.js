module.exports = {
  "verbose": true,
  "clearMocks": true,
  "collectCoverage": true,
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/cssMock.js"
  },
  "testEnvironment": "jsdom",
}
