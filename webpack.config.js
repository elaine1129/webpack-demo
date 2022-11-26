const path = require("path");
module.exports = {
  mode: "development", // so that the main.js is no longer minify
  // devtool: false, //get rid of eval(), make it to something we understand
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // create a dist directory and output to main.js inside the dir
    //__dirname means to take user's directory and create dist folder, cause cannot hardcode our directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, //regex: everytime come across css files, use css-loader
        use: ["style-loader", "css-loader"], //use in reverse order
        //css- l first to translate css to js and
        //style- l takes the js and inject to DOM
        // so reverse: style-loader first then css-loader
      },
    ],
  },
};
