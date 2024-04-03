const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node",
  mode: "production",
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "shareMe"),
  },
  plugins: [
    // Copy static files from serve-index/public to shareMe/public
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "node_modules", "serve-index", "public"),
          to: path.resolve(__dirname, "shareMe", "public"),
        }
      ],
    }),
  ],
};
