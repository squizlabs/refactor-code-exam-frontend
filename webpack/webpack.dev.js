/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

// Development server
const serverPort = 8001;
const devServerConfig = {
  hot: true,
  host: 'localhost',
  port: serverPort,
  static: {
    directory: path.join(__dirname, '../dist'),
    watch: true,
  },
  watchFiles: {
    paths: ['src/**/*.html'],
  },
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: devServerConfig,
  module: {
    rules: [
      {
        test: /\.scss$/,
        enforce: 'pre',
        loader: 'import-glob-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
