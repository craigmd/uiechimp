'user-strict'

var Webpack = require('webpack');
var path = require('path');
var Dotenv = require('dotenv-webpack');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');

process.env

var config = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false
    })
  ],
  devtool: 'eval-source-map'
}
