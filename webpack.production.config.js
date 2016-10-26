const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
  entry: {
    mainPath
  },
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: [nodeModulesPath],
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};
