var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = process.env.NODE_ENV === "production";
var babelPlugins = [];
var webpackPlugins = [
  new CopyWebpackPlugin([
    { from: './src/index.html', to: './index.html' },
    { from: './src/static', to: './static' }
  ]),
  new webpack.optimize.OccurrenceOrderPlugin(true)
];

if (isProduction) {
  webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
  babelPlugins.push(["transform-react-remove-prop-types", {
    "mode": "wrap",
    "ignoreFilenames": ["node_modules"]
  }]);
}


var config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // All JS/React files
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-1'],
            plugins: babelPlugins
          }
        }]
      },
      { // On Runtime ESLint
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: "eslint-loader",
        options: {
          emitWarning: true,
        }
      },
      { // SCSS Compilation
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { // JSON loader
        test: /\.json$/,
        loader: "json-loader"  //JSON loader
      },
      {// Fonts
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: webpackPlugins,
  devtool: "eval-source-map", // Default development sourcemap
};

// Change sourcemap if production
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}


module.exports = config;