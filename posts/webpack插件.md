---
title: webpack插件篇
---

### DefinePlugin
在全局定义常量
多用来指定生产打包
加上这个打包和不加打包有区别 

``` bash
<script type="text/javascript">
	plugins:[
		new webpack.DefinePlugin({
		  "process.env":{
		    NODE_ENV:JSON.stringify('production')
		   }
		}),
	]
</script>
```
### HashedModuleIdsPlugin
用于生产打包 此插件可以把打包后引入文件路径映射为hash值
webpack默认打包的模块id是按照路径分配的
如果你生产中的文件含有node_modules关键字 那也许更改它是个好的方式

``` bash
<script type="text/javascript">
	plugins: [
	    new webpack.HashedModuleIdsPlugin()
	]
</script>
```
### HotModuleReplacementPlugin
用于开发模式 热替换代码插件
改变更改的代码部分 而不是去监听文件变化

``` bash
<script type="text/javascript">
	new webpack.HotModuleReplacementPlugin()
</script>
```
### NoEmitOnErrorsPlugin
### NamedModulesPlugin

### ProvidePlugin
对于文件来说可能每个文件每次都要import $ from 'jQuery'之类的 可以这样配置
``` bash
<script type="text/javascript">
	plugins: [
	    new webpack.ProvidePlugin({
	        $: 'jquery'
	    })
	]
</script>

```
这样就可以直接使用$ 而不用写import $ from 'jQuery'

### HtmlWebpackPlugin

不是webpack自带插件 用于生成一个模板文件 来承载静态资源

``` bash
<script type="text/javascript">
	
</script>
```
