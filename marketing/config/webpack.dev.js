const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const config = {
  mode: "development",
  port: 8081,
  historyApiFallback: {
    index: "inex.html",
  },
  plugins: [new HtmlWebpackPlugin({ tempalte: "./public/index.html" })],
};

module.exports = merge(commonConfig, config);
