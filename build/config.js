const path = require('path');

module.exports = {
  dev: {
    // path
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    
    // dev server
    host: 'localhost',
    port: '8081',
    // 开发环境需要能在开发者工具中查看源码，项目快速rebuild
    // https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map',

    // use eslint
    useEslint: true,
    showEslintErrorsInOverlay: false
  },

  build: {
    // 打包后的入口页面
    index: path.resolve(__dirname, '../dist/index.html'),

    // path，打包后文件存储路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // source Maps
    productionSourceMap: false,

    // 发布环境更关心代码体积
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'hidden-source-map'
  }
};