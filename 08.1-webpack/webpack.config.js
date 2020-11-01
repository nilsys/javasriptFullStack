const path = require("path"); // CommonJs

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: { 
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  }
}