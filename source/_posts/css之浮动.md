---
title: css之浮动
---
浮动可谓是css布局中重要的组成部分，传说是为了解决文本流环绕效果，我想如果没有清除浮动的话也没什么至少页面布局会变得很难维护，清除浮动在一定程度上潜在的为我们把布局分离开来变得模块化，好了不多说了


### 标签清浮动

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.a{width: 200px;height: 200px;background: red;margin: 10px;float: left;}
	</style>
</head>
<body>
	<div class="a"></div>
	<div class="a"></div>
	<div style="clean:both"></div>
	<div class="a"></div>
</body>
</html>
```

也可以用class来定义
我们知道这样能解决基本清浮动问题。
但是这种方法的最大缺陷就是改变了html结构
### 父级overflow 清浮动

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		/*_height:1% ie6 zoom为ie特有系列*/
		.clearfix{overflow:auto;_height:1%;_zoom:1;}
		.a{width: 200px;height: 200px;background: red;margin: 10px;float: left;}
	</style>
</head>
<body>
	<div class="clear">
		<div class="a"></div>
		<div class="a"></div>
	</div>
	<div class="a"></div>
</body>
</html>
```
需要清除浮动的地方加个div.clear或者br.clear，我们知道这样能解决基本清浮动问题。

但是这种方法的最大缺陷就是改变了html结构

### 使用clearfix清浮动

``` bash

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*+height:1%;}
		.a{width: 200px;height: 200px;background: red;margin: 10px;float:left;}
	</style>
</head>
<body>
	<div class="clearfix">
		<div class="a"></div>
		<div class="a"></div>
	</div>
	<div class="a"></div>
</body>
</html>
```
就使用这用方法吧 不纠结
