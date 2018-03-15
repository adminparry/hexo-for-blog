---
title: requestAnimationFrame
---
window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。

注意：若您想要在下次重绘时产生另一个动画画面，您的回调例程必须调用 requestAnimationFrame()。

### 语法
``` bash
<script type="text/javascript">
	window.requestAnimationFrame(callback);
</script>
```
### callback
一个指定函数的参数，该函数在下次重新绘制动画时调用。这个回调函数只有一个传参，DOMHighResTimeStamp，指示requestAnimationFrame() 开始触发回调函数的当前时间（performance.now() 返回的时间）。

### 返回值
一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 window.cancelAnimationFrame() 以取消回调函数。

### 范例
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		#SomeElementYouWantToAnimate{
			width: 200px;height: 200px;background: red;

		}
	</style>
</head>
<body>
<div id="SomeElementYouWantToAnimate"></div>
</body>
<script type="text/javascript">
	var start = null;
	var element = document.getElementById('SomeElementYouWantToAnimate');
	element.style.position = 'absolute';

	function step(timestamp) {
	  if (!start) start = timestamp;
	  var progress = timestamp - start;
	  element.style.left = Math.min(progress / 10, 200) + 'px';
	  if (progress < 2000) {
	    window.requestAnimationFrame(step);
	  }
	}

	window.requestAnimationFrame(step);
</script>
</html>
```
### 个人观点
可以用requestAnimationFrame代替传统的定时器来实现动画，因为可以尽量减少重绘的性能问题

兼容
对于requestAnimationFrame兼容性而言 支持requestAnimationFrame的浏览器都支持css3
所以我们都利用css3来实现了动画效果 而requestAnimationFrame也只能针对css3不能实现的方案
CSS3动画的贝塞尔曲线是一个标准3次方曲线
因此，只能是：Linear, Sine, Quad, Cubic, Expo
没有tween中的 Back, Bounce
