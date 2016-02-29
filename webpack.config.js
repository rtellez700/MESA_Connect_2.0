var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        } 
      },
      {
        test: require.resolve("jquery"),
        loader: "imports?jQuery=jquery"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  resolve: {
    root:[
      path.resolve('./src/styles/vendor')
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ] : [
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ],
}

