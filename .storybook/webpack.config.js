const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

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
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        include: path.resolve(__dirname, '../'),
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]'
        }
      },
    ]
  }
}