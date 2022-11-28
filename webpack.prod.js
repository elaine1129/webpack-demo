const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"), // create a dist directory and output to main.js inside the dir
    //__dirname means to take user's directory and create dist folder, cause cannot hardcode our directory
    assetModuleFilename: "imgs/[name].[hash][ext]",
    clean: true,
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  //   plugins: [new CleanWebpackPlugin()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, //regex: everytime come across css files, use css-loader
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //use in reverse order
        // sass-l first to translate sass to css
        //css- l  to translate css to js and
        //minicssextractplugin - extract css into files
        // so reverse: "style-loader", "css-loader", "sass-loader"
      },
    ],
  },
});
