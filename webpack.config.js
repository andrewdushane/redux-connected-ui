const path = require("path");

const reactExternal = {
  root: "React",
  commonjs2: "react",
  commonjs: "react",
  amd: "react",
};

const reduxExternal = {
  root: "Redux",
  commonjs2: "redux",
  commonjs: "redux",
  amd: "redux",
};

const reactReduxExternal = {
  root: "ReactRedux",
  commonjs2: "react-redux",
  commonjs: "react-redux",
  amd: "react-redux",
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "index.js",
    library: "ReduxConnectedUi",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    react: reactExternal,
    redux: reduxExternal,
    "react-redux": reactReduxExternal,
  },
};
