const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    path: './src/index.js'
  },
  output: {
    path: './build',
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
