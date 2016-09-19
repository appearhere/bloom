const path = require('path');
var paths = require('../config/paths');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const webpackPostcssTools = require('webpack-postcss-tools');

const { vars: cssVars } = webpackPostcssTools.makeVarMap(path.join(paths.globalsSrc, 'index.css'));

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../'),
        loader: combineLoaders([{
          loader: 'style'
        }, {
          loader: 'css',
          query: {
            autoprefixercss: false,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          },
        }, {
          loader: 'postcss'
        }]),
      },
    ]
  },
  // We use PostCSS for autoprefixing only.
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
      customProperties({
        variables: cssVars,
      }),
    ];
  },
}