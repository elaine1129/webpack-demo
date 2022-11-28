const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // create a dist directory and output to main.js inside the dir
    //__dirname means to take user's directory and create dist folder, cause cannot hardcode our directory
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //regex: everytime come across css files, use css-loader
        use: ["style-loader", "css-loader", "sass-loader"], //use in reverse order
        // sass-l first to translate sass to css
        //css- l  to translate css to js and
        //style- l takes the js and inject to DOM
        // so reverse: "style-loader", "css-loader", "sass-loader"
      },
    ],
  },
});
