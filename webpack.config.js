/**
 * Created by Rohail on 6/19/2017.
 */


module.exports = {
  context: __dirname + '/src',
  entry : {
    app : './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  }
};