const path = require('path');

const webpackUtils = require('./webpack-utils');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[hash].js',
    path: webpackUtils.resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js|.ts$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("_autoprefixer@9.7.4@autoprefixer")({
                  browsers: ["last 10 versions", "not ie < 8"]
                }),
                require("_postcss-pxtorem@4.0.1@postcss-pxtorem")({
                  rootValue: 100,
                  unitPrecision: 5,
                  minPixelValue: 12,
                  propList: ['*']
                })
              ]
            }
          },
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            javascriptEnabled: true,
          },
        }]
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
  optimization: {
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  }
};
