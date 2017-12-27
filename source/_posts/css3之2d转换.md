---
title: css3之2d转换
---
通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。

通过转换实际上就是把元素作为坐标系中进行处理

为transform设置以下属性

translate()
rotate()
scale()
skew()
matrix()

### rotate

通过 rotate() 方法，元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。

·默认相对于对角线焦点坐标系旋转
·可以通过transform-origin设置旋转坐标系

``` bash
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
margin:30px;
width:200px;
height:100px;
background-color:yellow;
/* Rotate div */
transform-origin: 50% 50% 0;
transform:rotate(9deg);
-ms-transform:rotate(9deg); /* Internet Explorer */
-moz-transform:rotate(9deg); /* Firefox */
-webkit-transform:rotate(9deg); /* Safari 和 Chrome */
-o-transform:rotate(9deg); /* Opera */
}
</style>
</head>
<body>

<div>Hello World</div>

</body>
</html>

```
### translate

通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数
·设置百分比为自身的百分比值
·层级不能控制为先后顺序
·相对于本身位置移动
·可以拆分书写transform: translateX(50px) translateY(100px);

``` bash
<!DOCTYPE html>
<html>
<head>
<style> 
html,body{
	height: 100%;
}
div
{

width:20%;
height:20%;
background-color:yellow;
border:1px solid black;

}
div#div1{
	
	transform: translate(50%,50%);	
	/*position: relative;*/
	z-index: 10;
}
div#div2
{
	float:left;
	/*position: relative;*/
	z-index: 2;
	transform: translateX(50px) translateY(100px);
/*transform:translate(50px,100px);*/
-ms-transform:translate(50px,100px); /* IE 9 */
-moz-transform:translate(50px,100px); /* Firefox */
-webkit-transform:translate(50px,100px); /* Safari and Chrome */
-o-transform:translate(50px,100px); /* Opera */
}
</style>
</head>
<body>

<div id="div1">你好。这是一个 div 元素。</div>

<div id="div2">translate(50px,100px)</div>

</body>
</html>

```
### scale
通过 scale() 方法，元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：
·可以给定小数或整数但不能是百分比
·改变元素的宽高值
·相对于对角线焦点坐标系改变宽高
·当然如果作用在inline标签上是没什么意义的

``` bash
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
margin:100px;
transform:scale(2,4);
-ms-transform:scale(2,4); /* IE 9 */
-moz-transform:scale(2,4); /* Firefox */
-webkit-transform:scale(2,4); /* Safari and Chrome */
-o-transform:scale(2,4); /* Opera */
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>

</body>
</html>

```
### skew
通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：
·对角线焦点坐标系的翻转
·按照原则来说趋于90度的时候长度为无穷
![skew](/blog/images/css3/skew.jpg)
``` bash

<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
transform:skew(30deg,20deg);
-ms-transform:skew(30deg,20deg); /* IE 9 */
-moz-transform:skew(30deg,20deg); /* Firefox */
-webkit-transform:skew(30deg,20deg); /* Safari and Chrome */
-o-transform:skew(30deg,20deg); /* Opera */
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>

</body>
</html>

```
### matrix
matrix() 方法把所有 2D 转换方法组合在一起。
matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素
