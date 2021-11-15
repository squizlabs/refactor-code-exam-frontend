/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Define plugins
const cssExtract = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[name].css',
});
const cleanWebpack = new CleanWebpackPlugin();
const pluginList = [cssExtract, cleanWebpack];

module.exports = (env) => {
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
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
            MiniCssExtractPlugin.loader,
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
    plugins: pluginList,
    optimization: {
      minimize: env.minify ? true : false,
    },
  });
};
