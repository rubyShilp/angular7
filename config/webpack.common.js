const webpack = require("webpack");
const path = require("path");
const { AngularCompilerPlugin } = require("@ngtools/webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: ["./polyfills.ts", "./vendor.ts", "./scripts/app.ts"],
  },
  context: path.join(process.cwd(), "app"),
  resolve: {
    modules: ["node_modules", path.resolve(process.cwd(), "app")],
    extensions: [".js", ".ts", ".json", ".css", ".less"],
    alias: {
      "@": path.resolve(process.cwd(), "app/scripts/"),
      "@img": path.resolve(process.cwd(), "app/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: ["@ngtools/webpack"],
        exclude: /node_modules/,
      },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
        use: "url-loader?limit=10000&name=images/[name].[ext]?[hash]",
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(__dirname, "../tsconfig.json"),
      entryModule: path.resolve(
        __dirname,
        "../app/scripts/module/app.module#AppModule"
      ),
      skipCodeGeneration: true,
    }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[hash:7].css",
    }),
    new webpack.ContextReplacementPlugin(
      /@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, "../app")
    ),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico",
      filename: "index.html",
      hash: true, //防止缓存
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      chunksSortMode: "auto",
    }),
  ],
};
