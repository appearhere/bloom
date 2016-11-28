const path = require('path');
var paths = require('../config/paths');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var webpackPostcssTools = require('webpack-postcss-tools');
var lost = require('lost');

var cssMap = webpackPostcssTools.makeVarMap(path.join(paths.globalsSrc, 'index.css'));

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
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.md$/,
        loader: 'raw'
      },
      // "url" loader works just like "file" loader but it also embeds
      // assets smaller than specified size as data URLs to avoid requests.
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
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
      lost,
    ];
  },
}