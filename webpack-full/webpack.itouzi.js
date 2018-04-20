var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var less = require("less");

module.exports = {
  entry:{
    app:path.resolve(__dirname,'stmp/index.js'),
    style:path.resolve(__dirname,'stmp/less/index.less')
  },
  output:{
      path: path.join(__dirname, "build"),
      filename: "[name].js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'template.html'),
      filename:'index.html',
      inject:true,
    }),
  ],
  devServer: {

  port:9000,
  hot:true,
  historyApiFallback: true,

      stats: {
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        errors: true,
        errorDetails: false,
        hash: false,
        timings: false,
        modules: false,
        warnings: false
      }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  }
}