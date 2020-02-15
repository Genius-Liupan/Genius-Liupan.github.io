/**
 * Created by CastileMan on 2018/12/15.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const projectConfig = require('./project.config');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader" // 转化需要的loader
        }
      },
      {
        test: /\.scss$/,
        use: [            // 放在最后的 loader 首先被执行
          {
            loader: MiniCssExtractPlugin.loader
          },
          //"style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader",   // 将 CSS 转化成 CommonJS 模块
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("autoprefixer")({
                  browsers: ["last 10 versions", "not ie < 8"]
                })
              ]
            }
          },
          "sass-loader"   // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './images',
              name: '[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
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
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]_?(react|react-dom|scheduler|prop-types|react-router|react-router-dom|redux|react-redux|redux-thunk)/,
          name: 'react',
          chunks: 'all',
          priority: 10
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      title: projectConfig.title,
      inlineSource: "manifest.js$",
      favicon: './src/favicon.ico',
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
      template: './src/404.html',
      title: projectConfig.title,
      favicon: './src/favicon.ico',
      inject: false,
      minify: true
    }),
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
};
