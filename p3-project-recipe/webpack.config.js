const path = require("path");
// Webpack plugin -ийг зарлаж орууллаа
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "docs"),
    // Өмнө нь docs дотор үүссэн хэрэггүй файлуудыг цэвэрлэдэг болголоо
    // clean: true,
  },

  // Webpack plugin тохиргоо хийлээ
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],

  // Babel-loader -ийн тохиргоо
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },

  // Dev server -ийн тохиргоо хийлээ
  devServer: {
    static: "./docs",
  },

  // src файл -д хаана алдаа гарсныг харах боломжтой болголоо
  devtool: "inline-source-map",
};
