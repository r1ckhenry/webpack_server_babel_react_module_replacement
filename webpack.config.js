const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./source/index.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js",
    publicPath: "/"
  },
  devServer: {
    hot: true,
    contentBase: "./build",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
