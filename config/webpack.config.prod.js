const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const url = require('url');
const paths = require('./paths');
const env = require('./env');
const combineLoaders = require('webpack-combine-loaders');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const webpackPostcssTools = require('webpack-postcss-tools');
const lost = require('lost');
const babelConfig = require('./babel.prod');

const cssMap = webpackPostcssTools.makeVarMap(path.join(paths.globalsSrc, 'index.css'));

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
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint',
      include: [paths.appSrc, paths.componentSrc],
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [paths.appSrc, paths.componentSrc, paths.utilsSrc, paths.constantsSrc],
      loader: 'babel',
      query: babelConfig,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', combineLoaders(
        [{
          loader: 'css',
          query: {
            // "?-autoprefixer" disables autoprefixer in css-loader itself:
            // https://github.com/webpack/css-loader/issues/281
            // We already have it thanks to postcss. We only pass this flag in
            // production because "css" loader only enables autoprefixer-powered
            // removal of unnecessary prefixes when Uglify plugin is enabled.
            // Webpack 1.x uses Uglify plugin as a signal to minify *all* the assets
            // including CSS. This is confusing and will be removed in Webpack 2:
            // https://github.com/webpack/webpack/issues/283
            autoprefixer: false,
            // enable css modules: https://github.com/css-modules/css-modules
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            importLoaders: 1,
          },
        }, {
          loader: 'postcss',
        }]
      )),
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
