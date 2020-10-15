const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../demo/main.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "./tsconfig.dev.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 1996,
  },
};
