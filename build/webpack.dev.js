/**
 * 开发环境
 * 热更新，错误提示
 * 启动服务
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonWebpackConfig = require('./webpack.common.js');
const config = require('./config');
const utils = require('./utils');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({sourceMap: true, usePostCSS: true})
  },
  devtool: config.dev.devtool,
  devServer: {
    // contentBase: false, // what is CopyWebpackPlugin
    hot: true,   // hot
    host: config.dev.host,
    port: config.dev.port
  },
  plugins: [
    // HMR热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),  // HMR shows correct file name in console on update
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: resolve('favicon.ico'),
      title: 'funnyCoding'
    }),

    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }
    // ])
  ]
});

module.exports = new Promise((resolve, reject) => {
  // add friendlyErrorsPlugin
  devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`your application is running at here http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`]
    },
    onErrors: undefined
  }));
  resolve(devWebpackConfig);
});
