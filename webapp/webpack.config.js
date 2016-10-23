const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  less: path.join(__dirname, 'src/less')
};

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.app,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        include: PATHS.less,
        exclude: /node_modules/,
        loaders: ['style','css','less']
      }
    ]
  },
  entry: { 
    app: PATHS.app + '/js/entry.js',
    style: PATHS.less + '/styles.less'
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'PKC'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map'
};
