---
title: css之div垂直水平居中
---
div垂直水平居中尤其在新入行的前端必考的css知识，以下列出三种方式来实现

## 快速开始

### 创建html文件

``` bash
$ touch index.html
```

### 第一种常见开局

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.center{
			width: 200px;height: 200px;background: red;margin-left: -100px;margin-top: -100px;position: absolute;left: 50%;top: 50%;
		}
		.center{
			width: 200px;height: 200px;background: red;transform: translate(-50%, -50%);position: absolute;left: 50%;top: 50%;
		}

		
		
	</style>
</head>
<body>
	
	<div class="center">
	 	内容
	</div>
</body>
</html>
```
这种方式是最年代久远的也是合情合理的所以在任何浏览器下都会有着必然的结果，
当然这种方式需要我们定宽和高

### 第二种方式

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		
		.center{
			position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;width: 200px;height: 200px;background: green;
		}
	
		
	</style>
</head>
<body>
	
	<div class="center">
	 	内容
	</div>
</body>
</html>
```

这种方式呢给我们的感觉就是橡皮筋的感觉八面来风，无处躲藏，不过这个在ie低版本下是不行的，而这样的好处就是宽高是不固定的

### 第三种方式 

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
		.center{
			display:flex;
			width:100%;height:100%;background: yellow;
			align-items: center;/*垂直居中*/
		  justify-content: center;/*水平居中*/
		}
		
	</style>
</head>
<body>
	
	<div class="center">
	 	内容
	</div>
</body>
</html>
```
这种方式有的人叫做flexbox布局，当然这个名字不知道谁起的，
这种方式在一些流行的浏览器是可以的，当然这种方式是让子级的内容固定为垂直水平方位输出，这种方式跟前两种不同，是直接提供的属性
