const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"), // create a dist directory and output to main.js inside the dir
    //__dirname means to take user's directory and create dist folder, cause cannot hardcode our directory
    assetModuleFilename: "imgs/[name].[hash][ext]",
    clean: true,
  },
  //   plugins: [new CleanWebpackPlugin()],
});
