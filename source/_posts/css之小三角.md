---
title: css之小三角
---
小三角这个元素无论在web网站或者app移动应用，都有很广泛的使用，比如说什么宝，什么汇，什么街之类的都有，还有微信啊qq啊基本都有，这个样式很常见，用的挺多的，所以记录一下


![transparent](/blog/images/transparent/transparent.png)
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
.trans{
	width: 0;height: 0;
	border-left: 10px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 20px solid red;
	
	/*border-radius: 50%;*/
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
<style type="text/css">
	.her,.me{
		width: 200px;
		height: auto;
		padding: 20px;
		margin: 40px;
		position: relative;
		border:1px solid;
		border-radius: 4px;
	}	
	.her{
		background: #ffffff;

	}
	/*这里需要注意的是border-width要写在下面*/
	.her:before{
		border: solid transparent;
	    border-top: 5px solid transparent;
	    border-bottom: 17px solid transparent;
	    border-right: 26px solid black;
	    content: " ";
	    position: absolute;
	    right: 100%;
	    top: 50%;
	    margin-top: -7px;
	}
	.her:after{
		border: solid transparent;
	    border-top: 4px solid transparent;
	    border-bottom: 16px solid transparent;
	    border-right: 25px solid white;
	    content: " ";
	    position: absolute;
	    right: 100%;
	    top: 50%;
	    margin-top: -6px;
	}
	.me{
		background: #99CC33;
	}
	.me:before{
		border: solid transparent;
	    border-top: 5px solid transparent;
	    border-bottom: 17px solid transparent;
	    border-left: 26px solid black;
	    content: " ";
	    position: absolute;
	    left: 100%;
	    top: 50%;
	    margin-top: -7px;
	}
	.me:after{
		border: solid transparent;
	    border-top: 4px solid transparent;
	    border-bottom: 16px solid transparent;
	    border-left: 25px solid #99CC33;
	    content: " ";
	    position: absolute;
	    left: 100%;
	    top: 50%;
	    margin-top: -6px;
		
	}
</style>
<div class="her">
	can you help me?
</div>
<div class="me">
	yes , i do
</div>
</body>
</html>
```
当然实现的方式有很多，这里只使用css样式来书写一种