var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: __dirname + '/src/client/views/index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: {
      test: /\.js?$/,
      include: __dirname + '/src',
      loader: [
        'babel'
      ]
    }
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}