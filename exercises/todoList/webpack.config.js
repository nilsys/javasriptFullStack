const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "app", "js"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo Para Qualquer Coisa!",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/env"]
            ]
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}