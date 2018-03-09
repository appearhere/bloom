const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  target: 'node',
  resolve: {
    alias: {
      components: path.join('./src/components'),
      constants: path.join('./src/constants'),
      globals: path.join('./src/globals'),
      utils: path.join('./src/utils')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    noParse: /node_modules\/@appearhere\/mapbox-gl\/dist\/mapbox-gl.js/,
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        oneOf: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              'postcss-loader'
            ]
          },
          {
            test: /\.svg$/,
            use: {
              loader: 'svg-inline-loader',
              options: {
                removeTags: true
              }
            }
          },
          {
            test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash:8].[ext]',
              },
            }
          }
        ]
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'classnames': 'classnames',
    '@appearhere/mapbox-gl/dist/mapbox-gl': '@appearhere/mapbox-gl/dist/mapbox-gl',
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};