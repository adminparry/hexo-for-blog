const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const currentPath = __dirname;
const publicPath = '/';

const entry = {
	app:path.resolve(currentPath,'src/react/index.js'),
	react:['react','react-dom']
}

const output = {
	path:path.resolve(currentPath,'build'),
	publicPath: publicPath,
	filename:'js/[name]-bundle.js',
	chunkFilename: 'js/[name]-chunk.js',
}
const plugins = [
	// 用于生产环境的打包
	new webpack.DefinePlugin({
	  "process.env":{
	    NODE_ENV:JSON.stringify('production')
	   }
	}),
	// keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
	new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compress: {
            warnings: false
        }
    }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	// new webpack.NoEmitOnErrorsPlugin(),

	new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDOM':'react-dom'
    }),
    new HtmlWebpackPlugin({
    	template:path.resolve(currentPath,'src/react/index.html'),
    	filename:'index.html',
    	inject:true,
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
    	name:'react',
    	filename:'js/react.bundle.js'
    }),

   //  new webpack.optimize.CommonsChunkPlugin({
	  //   name: 'vendor',
	  //   minChunks: (module) => module.context && /node_modules/.test(module.context)
  	// })
]
const loader = {
	rules:[
		{
			test:/\.(js|jsx)$/,
			loader:'babel-loader',
			exclude: /node_modules/
		}
	]
}
const devServer = {

	port:9000,
	hot:true,
	historyApiFallback: true,
	// 从哪个目录下读取文件
	contentBase: currentPath,
    publicPath: publicPath,
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
}

const resolve = {
	extensions: ['.js','json', '.jsx','*'],
    // alias:{
    // 	'component':path.resolve(currentPath,'src/react/component')
    // }
}
// new WebpackDevServer(webpack({
// 	entry,
// 	output,
// 	module:loader,
// 	plugins,
// 	devServer
// }),{
// 	contentBase:'dist/'
// }).listen(8000)

// var compiler = webpack({
// 	entry,
// 	output,
// 	module:loader,
// 	plugins,
// 	devServer
// });
// var server = new WebpackDevServer(compiler, {
//     contentBase:'build/',
//     publicPath: "/assets/"
// });
// server.listen(8080);
module.exports = {
	cache: true,
	resolve,
	entry,
	output,
	module:loader,
	plugins,
	devServer
}