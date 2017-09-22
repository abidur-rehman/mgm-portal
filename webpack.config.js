const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/main/js/app.js'],
  devtool: 'sourcemaps',
  cache: true,
  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // creates style nodes from JS strings
          use: [
            {
              loader: 'css-loader' // translates CSS into CommonJS
            },
            {
              loader: 'resolve-url-loader' //
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                includePaths: [path.resolve(__dirname, './src/main/css'), path.resolve(__dirname, 'node-modules/')],
                sourceMap: true
              }
            }
          ]
        })
      },
      { test: /\.(png|jpg)/, loader: 'file-loader?emitFile=false&name=/images/[name].[ext]' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {
        filename: 'src/main/resources/static/built/main.css'
      }
    ),
    new CopyWebpackPlugin(
      [
        {from: 'src/main/resources/static/built/main.css', to: 'target/classes/static/built/main.css'},
        {from: 'src/main/resources/static/built/app.js', to: 'target/classes/static/built/app.js'}
      ]
    )
  ]
}
