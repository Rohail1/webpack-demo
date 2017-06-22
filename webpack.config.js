/**
 * Created by Rohail on 6/19/2017.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname + '/src',
  entry : {
    app : './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : 'My Title App',
      template:'../index.ejs',
      hash : true
    })
  ]
};