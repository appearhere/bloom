const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('../scripts/utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');
const env = require('./env');
const combineLoaders = require('webpack-combine-loaders');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const webpackPostcssTools = require('webpack-postcss-tools');
const lost = require('lost');
const babelConfig = require('./babel.dev');

const cssMap = webpackPostcssTools.makeVarMap(path.join(paths.globalsSrc, 'index.css'));

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
    root: path.resolve(__dirname),
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: ['*-loader'],
  },
  module: {
    noParse: /node_modules\/@appearhere\/mapbox-gl\/dist\/mapbox-gl.js/,
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: [paths.appSrc, paths.componentSrc],
      },
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [paths.appSrc, paths.componentSrc, paths.utilsSrc, paths.constantsSrc],
      loader: 'babel',
      query: babelConfig,
    }, {
      test: /\.css$/,
      loader: combineLoaders([{
        loader: 'style',
      }, {
        loader: 'css',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          importLoaders: 1,
        },
      }, {
        loader: 'postcss',
      }]),
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      exclude: /(\/favicon.ico|\/icons\/.+\.svg)$/,
      loader: 'file',
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }, {
      test: /icons\/.+\.svg$/,
      include: [paths.componentSrc],
      loaders: [
        'raw',
        'svgo',
      ],
    }, {
      test: /\/favicon.ico$/,
      include: [paths.appSrc],
      loader: 'file',
      query: {
        name: 'favicon.ico?[hash:8]',
      },
    }, {
      test: /\.(mp4|webm)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }, {
      test: /\.html$/,
      loader: 'html',
      query: {
        attrs: ['link:href'],
      },
    }, {
      test: /\.md$/,
      loader: 'raw',
    }],
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false,
  },
  postcss: () => [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
    }),
    customProperties({
      variables: cssMap.vars,
    }),
    customMedia({
      extensions: cssMap.media,
    }),
    lost,
  ],

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
