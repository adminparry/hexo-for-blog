---
title: css之小三角
---
小三角这个元素无论在web网站或者app移动应用，都有很广泛的使用，比如说什么宝，什么汇，什么街之类的都有，还有微信啊qq啊基本都有，这个样式很常见，用的挺多的，所以记录一下


### 代码示例

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>transparent</title>
<style>
body{
	background: #ccc;
}

._left{
	width:200px;
	padding:20px;
	height:auto;
	position:relative;
	background:white;
	margin:40px;
	border-radius:3px;
	border: 1px solid;
}
._left:after{
	right:100%;top:50%;
	border:0px solid transparent;
	content:" ";
	width:0; height:0;
	position: absolute;
	border-right-color:white;
	border-width:6px;
	margin-top:-6px;
}
._left:before{
	right:100%;top:50%;
	border:0px solid transparent;
	content:" ";
	width:0; height:0;
	position: absolute;
	border-right-color:black;
	border-width:7px;
	margin-top:-7px;
}


._right{
	width:200px;
	padding:20px;
	height:auto;
	position:relative;
	background:#99CC33;
	margin:40px;
	border-radius:3px;
	border: 1px solid;
}
._right:after, ._right:before{
	left:100%;top: 50%;
	border:10px solid transparent;
	content:" ";
	width:0; height:0;
	position: absolute;
}
._right:after {
	border-left-color:#99CC33;
	border-width:6px;
	margin-top:-6px;
}
._right:before{
	border-left-color:black;
	border-width: 7px;
	margin-top:-7px;
}

</style>
</head>
<body>

<div class="_left">
	how are you!
</div>
<div class="_right">
	speak chinese,please !
</div>


</body>
</html>
```
当然实现的方式有很多，这里只使用css样式来书写一种