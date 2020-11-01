const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
       exclude: /node_modules/,
       test: /\.js$/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/env']
         }
       }
      }
    ]
  },
  devtool: 'source-map',
}