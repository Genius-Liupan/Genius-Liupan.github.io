/**
 * Created by Administrator on 2018/12/15.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = require('./webpack.config');
const projectConfig = require('../project.config');
const webpackUtils = require('./webpack-utils');

module.exports = merge.smart(webpackConfig, {
  mode: 'development',
  devtool: "source-map", // 开启调试
  module: {
    rules: [
      {
        test: /\.js|.ts$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'react-hot-loader/webpack']
      }
    ]
  },
  devServer: {
    contentBase: webpackUtils.resolve('dist'),
    compress: true,
    port: projectConfig.port,
    hot: true,    // 热更新
    open: true,   // 打开浏览器
    overlay: true,    // 报错遮罩提醒
    stats: {
      colors: true
    },
    historyApiFallback: true,   // for SPA，始终返回index.html
    proxy: projectConfig.proxy
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: webpackUtils.resolve('src/index.template.html'),
      title: projectConfig.title,
      favicon: webpackUtils.resolve('src/favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
