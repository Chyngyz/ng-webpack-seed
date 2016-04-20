'use strict';
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  devServer: {
        outputPath: path.join(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel!jshint', exclude: '/node_modules/'
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
    ],
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/src/assets'
      }])
    ]
  }
};
