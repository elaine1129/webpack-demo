// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // devtool: false, //get rid of eval(), make it to something we understand
  entry: {
    main: "./src/index.js", // [name]: entry point--> output file will follow this name
    vendor: "./src/vendor.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/template.html",
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], //when encounter template.html and see the src image
        // it's going to require this image in JavaScript
        // will not work because webpack doesnt know what to do, so need to set rules
        // so that webpack know what to do when encounter image
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",

        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[hash].[ext]", //when encounter a image, will copy into new folder in outputPath
        //     outputPath: "imgs",
        //   },
        // },
      },
    ],
  },
};
