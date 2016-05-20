'use strict';

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname + '/src',
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'assets/js/bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'ng-annotate?add=true&map=false!babel', exclude: '/node_modules/'
      },
      {
        test: /\.html$/, loader: 'raw', exclude: '/node_modules/'
      },
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap=true&sourceMapContents=true'), exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/, loader: 'file?name=assets/images/[hash].[ext]'
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg)$/, loader: "url?limit=10000&name=assets/fonts/[name].[hash].[ext]"
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,  loader: "file?name=assets/fonts/[name].[hash].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/assets',
      to: __dirname + '/dist/assets'
    }], {
      ignore: ['*.scss','fonts/**/*']
    })

  ]
};
