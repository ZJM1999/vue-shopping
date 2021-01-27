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
      {test:/\.scss$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.vue$/,use:'vue-loader'},
      {test:/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,use:'file-loader'},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    ]
  }

}