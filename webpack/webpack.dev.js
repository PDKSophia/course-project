/*
 * @Description: 
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-14 21:18:40
 * @LastEditTime: 2022-09-14 23:44:14
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/app.jsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip
    port: 7001, // 启动端口为 6666 的服务
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../src/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);

