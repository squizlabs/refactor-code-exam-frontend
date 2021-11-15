/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
  // Read files in /html directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir)).filter(function (file) {
    //ignore folder
    return file.indexOf('.html') > -1;
  });

  return templateFiles.map((item) => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebPackPlugin({
      filename: `${name}.html`,
      minify: false,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
    });
  });
}

// Define plugins
const htmlPlugins = generateHtmlPlugins('../src/html');
const pluginList = [...htmlPlugins];

// File arrays
let tsx_files = glob.sync('./src/modules/**/*.tsx'); // Module TSX

module.exports = {
  entry: {
    main: ['./src/index.tsx'].concat(tsx_files),
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // Output folder
    filename: 'js/[name].js', // JS output path
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      NodeModules: path.resolve(__dirname, '../node_modules/'),
      src: path.resolve(__dirname, '../src/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        // HTML
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
      {
        // TypeScript and TSX
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        // JavaScript and JSX only (no JSON)
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // Images
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'mysource_files/[name].[ext]',
        },
      },
    ],
  },
  plugins: pluginList,
  optimization: {
    minimize: false,
  },
};
