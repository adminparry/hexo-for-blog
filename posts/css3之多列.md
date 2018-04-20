---
title: css3之过渡
---
通过 CSS3，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果

### w3c实例代码

``` bash
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:yellow;
transition:width 2s;
-moz-transition:width 2s; /* Firefox 4 */
-webkit-transition:width 2s; /* Safari and Chrome */
-o-transition:width 2s; /* Opera */
}

div:hover
{
width:300px;
}
</style>
</head>
<body>

<div></div>

<p>请把鼠标指针放到黄色的 div 元素上，来查看过渡效果。</p>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

</body>
</html>

```
在这里它只给我们提供了用hover来触发过渡的情况，但通常我们都想利用点击来控制这一切，但是就是没有 就是呵呵了


### 点击中的应用

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.ul_{
			height: 0;
			overflow: hidden;
		}
		.ul1{
			height: auto;
		}
	</style>
</head>
<body>
<button id="btn_">toggle</button>
<ul id="ul_" class="ul1">
	<li>1111111111</li>
	<li>1111111111</li>
	<li>1111111111</li>
	<li>1111111111</li>
</ul>
</body>
<script type="text/javascript">
	var btn = window.btn_;
	var ul = window.ul_;
	btn.onclick = function(){

		var height = ul.scrollHeight;
		// 首先判断这个元素是在看见的情况还是看不见的情况
		// 看见=》高度从 scrollHeight 到 0
		// 看不见=》高度从 0 到 scrollHeight
		var isShow = !!ul.offsetHeight;

		var initHeight = isShow ? height : 0 ;

		var targetHeight = !isShow ? height : 0 ;
		// 设置原始值 这个是必要的条件
		ul.style.height = initHeight + 'px';


		ul.style.display = 'block';
		ul.style.overflow = 'hidden';
		ul.style.transition = 'height .4s';
		ul.style.transitionTimingFunction = 'cubic-bezier(0.61,-0.61,0.3,1.2)';

		// 在这里只是为了第一次的时候确保原始值成功别transition所得到
		// 想不到更好的方法去做这件事
		setTimeout(function(){

			ul.style.height = targetHeight + 'px';
					
		})
	}
</script>
</html>
```
transition是相对运动 在你不给定原始值的时候是不会工作的 而且还要一个具体的数值 比如height:auto 这个他是不会帮你去计算的 （就好像是上帝给了你生命，但是让你活的生不如死是一样的道理）

### 属性

属性	描述	CSS
transition	简写属性，用于在一个属性中设置四个过渡属性。	3
transition-property	规定应用过渡的 CSS 属性的名称。	3
transition-duration	定义过渡效果花费的时间。默认是 0。	3
transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。	3
transition-delay	规定过渡效果何时开始。默认是 0。

###  cubic-bezier


值	描述
linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

默认值 ease