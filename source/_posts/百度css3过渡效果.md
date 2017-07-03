---
title: 百度css3过渡效果
---
看起来挺不错的所以一个小东西拿去来看一看就是一个属性，不过这样应用是极好的，起码视觉的感觉个人觉得不错

## 快速开始

### 创建一个html文件

``` bash
$ touch index.html
```

### 来那么几个div

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	html,body{
		height: 100%;
	}
	div{
		width: 100%;height: 20%;
	}
	.box
	{
	opacity: 0;
	transform:translateY(24px);
	-moz-transform:translateY(24px); /* Firefox 4 */
	-webkit-transform:translateY(24px); /* Safari and Chrome */
	-o-transform:translateY(24px); /* Opera */

	transition:opacity 2s, height 2s;
	-moz-transition:opacity 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
	-webkit-transition:opacity 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
	-o-transition:opacity 2s, height 2s, -o-transform 2s; /* Opera */
	}
	</style>
</head>
<body>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
</body>
</html>
```

先来10个反正又不要钱，定义样式类box设置transform属性通过translateY，transition改变opacity和height

### 添加事件

``` bash
<!-- 获取所有的div给个随机颜色看看 -->
var div = document.getElementsByTagName('div');
for (var i = 0; i < div.length; i++) {

	var rgb = [(Math.random()*255).toFixed(0),(Math.random()*255).toFixed(0),(Math.random()*255).toFixed(0)];
	
	div[i].style.background = 'rgb('+rgb.join(',')+')';

}
<!-- 获取所有的class为box的元素 -->
var div = document.getElementsByClassName('box');
<!-- 初始化初次加载执行 -->
_scroll();
window.onscroll = _scroll;
<!-- 设置样式 -->
function setCss3(ele){
	ele.style.transform = 'translateY(0px)';
	ele.style.opacity = '1';
	ele.style.WebkitTransform = 'translateY(0px)';
}
<!-- 绑定事件 -->
function _scroll(){
	for (var i = 0; i < div.length; i++) {
		
		if(document.body.scrollTop+document.documentElement.clientHeight> div[i].offsetTop){
			 setCss3(div[i]);
		}
	}
}
```
