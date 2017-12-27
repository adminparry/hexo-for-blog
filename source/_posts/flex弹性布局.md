---
title: flex弹性布局
---
布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现
2009年，W3C提出了一种新的方案—-Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能 ie10+

### 行内与块
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.flex{
			display: flex;
		}
		.flex-line{
			display: inline-flex;
		}
	</style>
</head>
<body>
	<div class="flex">flex</div>
	<div class="flex">flex</div>
	<div class="flex-line">flex-line</div>
	<div class="flex-line">flex-line</div>
	
</body>
</html>
```
注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

### flex-direction子元素排列方式
row（默认值）：主轴为水平方向，起点在左端。
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.flex-row{
			display: flex;
			flex-direction: row;
		}
		.flex-row-r{
			display: flex;
			flex-direction: row-reverse;
		}
		
		.flex-column{
			display: flex;
			flex-direction: column;
		}
		.flex-column-r{
			display: flex;
			flex-direction: column-reverse;
		}
	</style>
</head>
<body>
	<div class="flex-row">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
	<div class="flex-row-r">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
	<div class="flex-column">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
	<div class="flex-column-r">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
</body>
</html>
```

### flex-wrap子元素是否换行
nowrap（默认）：不换行。
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.flex-nowarp{
			display: flex;
			flex-wrap: nowrap;
			width: 100px;

		}
		.flex-nowarp div{
			width: 50px;

		}
		.flex-warp{
			display: flex;
			flex-wrap: wrap;
			width: 100px;

		}
		.flex-warp div{
			width: 50px;

		}
		.flex-warp-r{
			display: flex;
			flex-wrap: wrap-reverse;
			width: 100px;

		}
		.flex-warp-r div{
			width: 50px;

		}
		
	</style>
</head>
<body>
	<div class="flex-nowarp">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
	<div class="flex-warp">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
	<div class="flex-warp-r">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>
</body>
</html>
```
### flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

### justify-content子元素对齐方式
flex-start（默认值）：左对齐
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>
```



