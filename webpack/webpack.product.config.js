/**
 * Created by CastileMan on 2018/12/15.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = require('./webpack.config');
const projectConfig = require('../project.config');
const webpackUtils = require('./webpack-utils');

module.exports = merge.smart(webpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),       // 压缩js
      new OptimizeCSSAssetsPlugin({})   // 压缩css
    ],
    usedExports: true,
    sideEffects: true,
    runtimeChunk: {
      name: "runtime"
    },
  },
  plugins: [
    new CleanWebpackPlugin([webpackUtils.resolve('dist')], {
      verbose: true,
      allowExternal: true
    }),
    new HtmlWebpackPlugin({
      template: webpackUtils.resolve('src/index.template.html'),
      title: projectConfig.title,
      inlineSource: "manifest.js$",
      favicon: webpackUtils.resolve('src/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: webpackUtils.resolve('src/404.html'),
      title: projectConfig.title,
      favicon: webpackUtils.resolve('src/favicon.ico'),
      inject: false,
      minify: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
});
