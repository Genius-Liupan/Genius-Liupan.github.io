/**
 * Created by Administrator on 2018/12/15.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const projectConfig = require('./project.config');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
    //hotUpdateChunkFilename: '[id].[hash].hot-update.js'
  },
  mode: 'development',
  devtool: "source-map", // 开启调试
  module: {
    rules: [
      {
        test: /\.js|.ts$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'react-hot-loader/webpack']
        //use: {
        //  loader: "babel-loader" // 转化需要的loader
        //}
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
                require("autoprefixer")({
                  browsers: ["last 10 versions", "not ie < 8"]
                }),
                require("postcss-pxtorem")({
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
        test: /\.(png|svg|jpg|gif)$/,
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
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    //compress: true,
    port: projectConfig.port,
    hot: true,    // 热更新
    open: true,   // 打开浏览器
    overlay: true,    // 报错遮罩提醒
    stats: {
      colors: true
    },
    historyApiFallback: true,   // for SPA，始终返回index.html
    //proxy: {
    //  '/api': {
    //    target: 'http://localhost:3000',
    //    pathRewrite: {'^/api' : ''},
    //    secure: true,
    //    changeOrigin: true
    //  }
    //}
  }
  ,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      title: projectConfig.title
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
;
