const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/app.jsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../src/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
}

module.exports = webpackMerge.merge(prodConfig, baseConfig)
