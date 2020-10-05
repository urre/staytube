const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin()

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index',
  ],
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader?sourceMap&importLoaders=1!postcss-loader'
        ),
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  devServer: {
    contentBase: './src',
    hot: true,
    colors: true,
    inline: true,
    historyApiFallback: true,
  },
}
