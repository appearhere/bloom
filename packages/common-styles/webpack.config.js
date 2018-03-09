const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'CommonStyles',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  optimization: {
    minimize: false
  },
};