const merge = require('webpack-merge');
const path = require('path');
const babelConfig = require('../config/babel.dev');
const paths = require('../config/paths');

// Blacklist uglification until we figure out a fix for that.
const PLUGIN_BLACKLIST = ['UglifyJsPlugin'];

module.exports = (storybookBaseConfig, configType) => {
  if (configType === 'PRODUCTION') {
    // eslint-disable-next-line no-param-reassign
    storybookBaseConfig.plugins = storybookBaseConfig.plugins.filter(plugin =>
      PLUGIN_BLACKLIST.indexOf(plugin.constructor.name) < 0
    );
  }

  const extension = {
    module: {
      noParse: /node_modules\/@appearhere\/mapbox-gl\/dist\/mapbox-gl.js/,
      rules: [{
        oneOf: [{
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            }, {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve('./config/postcss.config.js'),
                },
              },
            },
          ],
        }, {
          test: /\.(js|jsx)$/,
          include: [
            paths.appSrc,
            paths.componentSrc,
            paths.utilsSrc,
            paths.globalsSrc,
            paths.constantsSrc,
          ],
          loader: require.resolve('babel-loader'),
          options: babelConfig,
        }, {
          test: /icons\/.+\.svg$/,
          include: [paths.componentSrc],
          use: [
            'raw-loader',
            'svgo-loader',
          ],
        }, {
          test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        }, {
          test: /\.(mp4|webm)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        }, {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            attrs: ['link:href'],
          },
        }, {
          test: /\.md$/,
          loader: 'raw-loader',
        }],
      }],
    },
  };

  return merge(storybookBaseConfig, extension);
};
