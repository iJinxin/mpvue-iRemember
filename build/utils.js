'use strict';
const path = require('path');
// 提取css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require('./config');

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options) => {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const generateLoaders = (loader, loaderOptions) => {
    const loaders = [];

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      loaders.push(MiniCssExtractPlugin.loader);
    } else {
      loaders.push('vue-style-loader');
    }

    loaders.push(cssLoader);

    if (options.usePostCSS) {
      loaders.push(postcssLoader);
    }

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    return loaders;
  };

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass')
  }

};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = (options) => {
  const output = [];
  const loaders = exports.cssLoaders(options);

  Object.keys(loaders).forEach((extension) => {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    });
  });
  return output;
};
