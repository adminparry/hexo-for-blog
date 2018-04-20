---
title: css之响应式布局
---
### 单列布局
水平居中的页面布局中最为常见的一种布局形式，多出现于标题，以及内容区域的组织形式，下面介绍四种实现水平居中的方法（注：下面各个实例中实现的是child元素的对齐操作，child元素的父容器是parent元素）
使用inline-block 和 text-align实现

``` bash
<style type="text/css">
	.parent{text-align: center;}
	.child{display: inline-block;}
</style>
```
优点：兼容性好；
不足：需要同时设置子元素和父元素
## 使用margin:0 auto来实现
``` bash
<style type="text/css">
	.child{width:200px;margin:0 auto;}
</style>
```

优点：兼容性好
缺点: 需要指定宽度

## 使用table实现
``` bash
<style type="text/css">
	.child{display:table;margin:0 auto;}
</style>
```
优点:只需要对自身进行设置
不足:IE6,7需要调整结构
## 使用绝对定位实现
``` bash
<style type="text/css">
	.parent{position:relative;} /*或者实用margin-left的负值为盒子宽度的一半也可以实现，不过这样就必须知道盒子的宽度，但兼容性好*/ 
	.child{position:absolute;left:50%;transform:translate(-50%);}
</style>
```
不足：兼容性差,IE9及以上可用
## 用flex布局实现
``` bash
<style type="text/css">
	/*第一种方法*/ .parent{display:flex;justify-content:center;}
	/*第二种方法*/ .parent{display:flex;} .child{margin:0 auto;}
</style>
```
缺点：兼容性差，如果进行大面积的布局可能会影响效率
### 垂直居中
vertical-align
我们都知道，每个人都有不同的嗜好，有的人喜欢吃甜食，有的人喜欢吃辣的东西，有的人不喜欢吃芹菜，有的人不喜欢吃羊肉等等。CSS中的有些元素也是这样，他们有的只对牛奶感兴趣，有的只喜欢吃坚果和果冻，而讨厌牛奶。而vertical-align呢，是个比较挑食的家伙，它只喜欢吃果冻，从小吃果冻长大，没有了果冻，它就会闹脾气，对你不理不睬。我称之为“果冻依赖型元素”，又称之为“inline-block依赖型元素”，也就是说,只有一个元素属于inline或是inline-block（table-cell也可以理解为inline-block水平）水平，其身上的vertical-align属性才会起作用。我对css-vertical-align的一些理解与认识

在使用vertical-align的时候，由于对齐的基线是用行高的基线作为标记，故需要设置line-height或设置display:table-cell;


``` bash
<style type="text/css">
	/*第一种方法*/ .parent{display:table-cell;vertical-align:middle;height:20px;}
	/*第二种方法*/ .parent{display:inline-block;vertical-align:middle;line-height:20px;}
</style>
```
## 用绝对定位
``` bash
<style type="text/css">
	.parent{position:relative;} 
	.child{positon:absolute;top:50%;transform:translate(0,-50%);}
</style>
```
## 用行块元素
``` bash
<style type="text/css">
	/*第一种方法*/ .parent{display:table-cell;vertical-align:middle;height:20px;}
	/*第二种方法*/ .parent{display:inline-block;vertical-align:middle;line-height:20px;}
</style>
```
### 单边固定单边自适应

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>
	.parent{display:table;table-layout:fixed;width:100%;}
	.left{display:table-cell;}
	.right{width:100px;display:table-cell;}

</style>
</head>
<body>
<div class="parent">
	<div class="left">left</div>
	<div class="right">right</div>
</div>
</body>
</html>
```
### 圣杯布局
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		header{width: 100%;height: 40px;background-color: darkseagreen;}
		.container{ height:200px;overflow:hidden;}
		.middle{width: 100%;height: 200px; background-color: deeppink;float:left;}
		.left{ width: 200px;height: 200px;background-color: blue;float:left;}
		.right{width: 200px;height: 200px;background-color: darkorchid;float:left;}
		footer{width: 100%; height: 30px;background-color: darkslategray;}

	</style>
</head>
<body>
<header><h4>Header内容区</h4></header>
<div class="container">
<div class="middle"><h4>中间弹性区</h4></div> 
<div class="left"><h4>左边栏</h4></div> 
<div class="right"><h4>右边栏</h4></div>
</div>
<footer><h4>Footer内容区</h4></footer>

</body>
</html>
```
### 双飞翼布局
``` bash
```

