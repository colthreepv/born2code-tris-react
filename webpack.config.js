module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module:{
    rules: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
