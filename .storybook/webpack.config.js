const path = require('path');
var paths = require('../config/paths');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var webpackPostcssTools = require('webpack-postcss-tools');
var aliases = require('../config/webpack.config.alias');

var cssMap = webpackPostcssTools.makeVarMap(path.join(paths.globalsSrc, 'index.css'));

module.exports = {
  resolve: {
    alias: aliases
  },
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
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /(\/favicon.ico|\/icons\/.+\.svg)$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // "raw" loader for certain SVGs, i.e., icons, so we can embed them
      // in the page itself
      {
        test: /icons\/.+\.svg$/,
        include: [paths.componentSrc],
        loaders: [
          'raw',
          'svgo',
        ],
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
        variables: cssMap.vars,
      }),
      customMedia({
        extensions: cssMap.media,
      }),
    ];
  }
}