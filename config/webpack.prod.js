const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const terserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const commonConfig = require("./webpack.common");
const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = merge(commonConfig, {
  output: {
    path: path.join(process.cwd(), "dist"),
    publicPath: "/",
    filename: "js/[name].bundle[hash:7].js",
    chunkFilename: "js/[name].bundle[hash:7].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  mode: "production",
  //压缩js
  optimization: {
    minimizer: [
      new terserPlugin({
        terserOptions: {
          compress: false,
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
});
