const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development", // so that the main.js is no longer minify
  // devtool: false, //get rid of eval(), make it to something we understand
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"), // create a dist directory and output to main.js inside the dir
    //__dirname means to take user's directory and create dist folder, cause cannot hardcode our directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
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
};
