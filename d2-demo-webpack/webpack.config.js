const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // {
  // index: "./src/index.js",
  // print: "./src/print.js",
  // another: "./src/another-module.js",
  // index: {
  //   import: "./src/index.js",
  //   dependOn: "shared",
  // },
  // another: {
  //   import: "./src/another-module.js",
  //   dependOn: "shared",
  // },
  // shared: "lodash",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // title: "Output Management",
      // title: "Development",
      title: "Caching",
    }),
  ],
  output: {
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
