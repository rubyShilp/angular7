const webpack = require("webpack");
const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { AngularCompilerPlugin } = require("@ngtools/webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let loader =
  process.env.NODE_ENV === "production" ? "raw-loader" : "html-loader";
module.exports = {
  entry: {
    main: ["./polyfills.ts", "./vendor.ts", "./scripts/app.ts"],
  },
  context: path.join(process.cwd(), "app"),
  devtool: "source-map",
  resolve: {
    modules: ["node_modules", path.resolve(process.cwd(), "app")],
    extensions: [".ts", ".js", ".json", ".css", ".less"],
    alias: {
      "@": path.resolve(process.cwd(), "app/scripts/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["@ngtools/webpack", "ts-loader"],
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
        use: "raw-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
        use: {
          loader: "url-loader?limit=1&name=images/[name].[ext]?[hash]",
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",

          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: [
                    "> 1%",
                    "last 2 versions",
                    "not ie <= 8",
                  ],
                }),
              ],
            },
          },
          {
            loader: "less-loader",
            options: {
              implementation: require("less"),
              prependData: `@env: ${process.env.NODE_ENV};`,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: [
                    "> 1%",
                    "last 2 versions",
                    "not ie <= 8",
                  ],
                }),
              ],
            },
          },
        ],
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
    new FriendlyErrorsWebpackPlugin(),
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(__dirname, "../tsconfig.json"),
      entryModule: path.resolve(
        __dirname,
        "../app/scripts/module/app.module#AppModule"
      ),
      skipCodeGeneration: true,
    }),
    new webpack.ProgressPlugin(),
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
