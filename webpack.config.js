// https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
        exclude: /node_modules/
      },
      // { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin({ eslint: true, tslint: false }),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      filename: './index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // })
  ]
};
