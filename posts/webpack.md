---
title: webpack
---
继grunt gulp 出现的静态资源管理工具
[中文文档](https://www.webpackjs.com/)

### entry
入口文件

``` bash
<script type="text/javascript">
	module.exports = {
	  entry: './path/to/my/entry/file.js'
	};
</script>
```

### output
出口
``` bash
<script type="text/javascript">
	const path = require('path');

	module.exports = {
	  entry: './path/to/my/entry/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  }
	};
</script>
```
### loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）

``` bash
<script type="text/javascript">
	const path = require('path');

	const config = {
	  entry: './path/to/my/entry/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  },
	  module: {
	    rules: [
	      { test: /\.txt$/, use: 'raw-loader' }
	    ]
	  }
	};

	module.exports = config;
</script>
```

### plugins
一个让用户能够自定义行为的接口

``` bash
<script type="text/javascript">
	const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
	const webpack = require('webpack'); // 用于访问内置插件
	const path = require('path');

	const config = {
	  entry: './path/to/my/entry/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  },
	  module: {
	    rules: [
	      { test: /\.txt$/, use: 'raw-loader' }
	    ]
	  },
	  plugins: [
	    new webpack.optimize.UglifyJsPlugin(),
	    new HtmlWebpackPlugin({template: './src/index.html'})
	  ]
	};

	module.exports = config;
</script>
```
### 多个target
配置是多例的

``` bash
<script type="text/javascript">
	module.exports = [{
	  output: {
	    filename: './dist-amd.js',
	    libraryTarget: 'amd'
	  },
	  entry: './app.js',
	}, {
	  output: {
	    filename: './dist-commonjs.js',
	    libraryTarget: 'commonjs'
	  },
	  entry: './app.js',
	}]
</script>
```

### context
目录上下文 用于从配置中解析入口起点(entry point)和 loader

``` bash
<script type="text/javascript">
	const context = path.resolve(__dirname, "app")
</script>
```

### resolve
可缺省值
``` bash
<script type="text/javascript">
	const resolve = {
		// 默认值为 .js .json
		extensions:['.js','.jsx','.json','.vue'],
		// 别名
		alias:{
			'vue$': 'vue/dist/vue.esm.js',
		}
	}

	// import Vue from 'vue$'
</script>
```

### 开发环境搭建
### 生产环境打包
