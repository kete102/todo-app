const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "buid.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: "./src/index.html",
    }),
  ],
};
