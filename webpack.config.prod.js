const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
    new ExtractTextPlugin('style-[hash].css', {
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.html$/,
        loader: 'raw!html-minify',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
}
