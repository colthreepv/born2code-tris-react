const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    contentBase: './public',
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module:{
    rules: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
