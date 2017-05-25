config = {
  entry: __dirname + "/../controllers/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "./build"
  },
  devtool: 'source-map'
}

module.exports = config;
