const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const env = require('./env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const babelConfig = require('./babel.dev');
const WatchMissingNodeModulesPlugin = require('../scripts/utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('react-hot-loader/patch'),
    `${require.resolve('webpack-dev-server/client')}?/`,
    require.resolve('webpack/hot/only-dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/',
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
      include: [paths.appSrc, paths.componentSrc],
      options: {
        configFile: path.join(__dirname, 'eslint.js'),
        useEslintrc: false,
      },
    }, {
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
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ],
};
