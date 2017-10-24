const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const url = require('url');
const webpack = require('webpack');

const env = require('./env');
const babelConfig = require('./babel.prod');
const paths = require('./paths');

if (env['process.env.NODE_ENV'] !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const homepagePath = require(paths.appPackageJson).homepage;
let publicPath = homepagePath ? url.parse(homepagePath).pathname : '/';
if (!publicPath.endsWith('/')) {
  // If we don't do this, file assets will get incorrect paths.
  publicPath = `${publicPath}/`;
}

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath,
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      ...paths.nodePaths,
      paths.ownNodeModules,
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    noParse: /node_modules\/@appearhere\/mapbox-gl\/dist\/mapbox-gl.js/,
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
    }, {
      oneOf: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: require.resolve('css-loader'),
            options: {
              autoprefixer: false,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          }, {
            loader: require.resolve('postcss-loader'),
            options: {
              config: {
                path: path.resolve('./config/postcss.config.js'),
              },
            },
          }],
          fallback: require.resolve('style-loader'),
        }),
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
        test: /\.html$/,
        loader: require.resolve('html-loader'),
        options: {
          attrs: ['link:href'],
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\/favicon.ico$/,
        include: [paths.appSrc],
        loader: 'file-loader',
        options: {
          name: 'favicon.ico?[hash:8]',
        },
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(env),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
  ],
};
