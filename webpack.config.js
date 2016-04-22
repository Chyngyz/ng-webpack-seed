'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './app/index.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    contentBase: './src',
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel', exclude: '/node_modules/'
      },
      {
        test: /\.html$/, loader: 'raw', exclude: '/node_modules/'
      },
      {
        test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'
      },
      {
        test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap', exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
};
