const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
      },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
      }),
    new MiniCssExtractPlugin()
    ],
    devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },
    ],
  },
};