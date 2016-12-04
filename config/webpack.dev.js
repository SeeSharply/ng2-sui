var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
//const WriteFilePlugin = require('write-file-webpack-plugin');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8019/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].js.map',
    devtoolModuleFilenameTemplate: function (info) {
      return "file:///" + info.absoluteResourcePath;
    }
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
   // new WriteFilePlugin()
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
