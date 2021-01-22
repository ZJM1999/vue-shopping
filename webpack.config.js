const path = require('path')

module.exports = {

  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.vue$/,use:'vue-loader'},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    ]
  }

}