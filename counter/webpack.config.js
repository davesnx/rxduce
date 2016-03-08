'use strict'

var path = require('path')

module.exports = {
  debug: 'inline-source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'rx': 'rx-lite'
    },
    extensions: ['', '.js']
  }
}
