---
title: js之拖拽理论
---
拖拽这个不常见的效果很少出现在前端，不过不是没有，在游戏开发世界里这个东西还是蛮常见的，尽管是个不起眼的东西，但我看来这是个很好的理论

##快速开始

### 创建html文件

``` bash
touch index.html
```
### 先准备一个元素

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		#drag{
			position: absolute;width: 200px;height: 200px;background: red;cursor: move;
		}
	</style>
</head>
<body>
	<div id="drag"></div>
</body>

</html>
```
这里需要一个绝对定位的元素以便于利用坐标位置进行拖动

### 编写脚本

``` bash
function Drag(box){
	this.box = box;
	this.init();

}

Drag.prototype.init = function(){
	var self = this;

	this.box.onmousedown = function(ev){
		var oEvent = ev || event;
		<!-- 记录当前的偏移量 -->
		self.disX = oEvent.clientX - self.box.offsetLeft;
		self.disY = oEvent.clientY - self.box.offsetTop;
		console.log(self.disX,self.disY)
		document.onmousemove = function(ev){
			self.move(ev);
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			<!-- 为了ie的捕获 -->
			self.box.releaseCapture && self.box.releaseCapture();
		}
		
		<!-- 为了ie的捕获 -->
		self.box.setCapture && self.box.setCapture();
		<!-- 阻止默认事件 -->
		return false;
	}
}
Drag.prototype.move = function(ev){
	var self = this;
	var oEvent = ev || event;
	<!-- 与偏移量之差 -->
	self.box.style.left =  oEvent.clientX - self.disX +'px';
	self.box.style.top =  oEvent.clientY - self.disY +'px';
}
new Drag(document.getElementById('drag'))
```

