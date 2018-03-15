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
			background: red;
		}
		.flex-line{
			display: inline-flex;
			background: green;
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
![flex](/blog/images/flex/1.png)

注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

采用 Flex 布局的元素是约束内部元素的排列方案 所以Flex 布局的元素也叫做 Flex 容器

容器的属性

flex-direction 排列的起点方向
flex-wrap 换行方案
flex-flow 简写 flex-direction flex-wrap
justify-content
align-items
align-content


### flex-direction子元素排列方向

row（默认值）：主轴为水平方向，起点在左端。
row-reverse ：主轴为水平方向，起点在右端。
column ： 主轴为竖直方向，起点在顶端。
column-reverse ： 主轴为竖直方向，起点在底端

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.flex-row{
			display: flex;
			flex-direction: row;
			background: red;
		}
		.flex-row-r{
			display: flex;
			flex-direction: row-reverse;
			background: green;
		}
		
		.flex-column{
			display: flex;
			flex-direction: column;
			background: yellow;
		}
		.flex-column-r{
			display: flex;
			flex-direction: column-reverse;
			background: orange;
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
![flex](/blog/images/flex/2.png)

注：对flex子元素设置宽度 如果超出flex容器的宽度则按照比例进行分配 高度也是如此

### flex-wrap子元素超出是否换行

nowrap（默认）：不换行。
wrap : 换行
wrap-reverse ：翻转之后换行 而不是换行之后翻转
``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        div{
            text-align: center;
        }
        .flex-nowarp{
            display: flex;
            flex-wrap: nowrap;
            width: 100px;

        }
        .flex-nowarp div{
            width: 50px;background: red;

        }
        .flex-warp{
            display: flex;
            flex-wrap: wrap;
            width: 100px;

        }
        .flex-warp div{
            width: 50px;background: green;

        }
        .flex-warp-r{
            display: flex;
            flex-wrap: wrap-reverse;
            width: 100px;

        }
        .flex-warp-r div{
            width: 50px;background: yellow;

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

![flex](/blog/images/flex/3.png)


### flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

### justify-content子元素水平对齐方式

flex-start（默认值）：左对齐
flex-end : 右对齐
center ：居中
space-between ：两端对齐，项目之间的间隔都相等。
space-around ：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .flex_start{
            display: flex;
            justify-content: flex-start;
            background: red;
        }
        .flex_end{
            display: flex;
            justify-content: flex-end;
            background: green;
        }
        .flex_center{
            display: flex;
            justify-content: center;
            background: yellow;
        }
       
        .flex_between{
            display: flex;
            justify-content: space-between;
            background: pink;
        }
         .flex_around{
            display: flex;
            justify-content: space-around;

            background: orange;
        }
        
    </style>
</head>
<body>
<div class="flex_start">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_end">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_between">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_around">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
</body>
</html>
```
![flex](/blog/images/flex/4.png)

### align-content 换行模式子元素垂直对齐方式

flex-start（默认值）：左对齐
flex-end : 右对齐
center ：居中
space-between ：两端对齐，项目之间的间隔都相等。
space-around ：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
    div{
        border:1px solid;
    }
        .flex_start{
            display: flex;width:30px;flex-wrap:wrap;height:80px;
            align-content: flex-start; 
            background: red;

        }
        .flex_end{
            display: flex;width:30px;flex-wrap:wrap;height:80px;
            align-content: flex-end;
            background: green;
        }
        .flex_center{
            display: flex;width:30px;flex-wrap:wrap;height:80px;
            align-content: center;
            background: yellow;
        }
       
        .flex_between{
            display: flex;width:30px;flex-wrap:wrap;height:80px;
            align-content: space-between;
            background: pink;
        }
         .flex_around{
            display: flex;width:30px;flex-wrap:wrap;height:80px;
            align-content: space-around;

            background: orange;
        }
        
    </style>
</head>
<body>
<div class="flex_start">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_end">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_between">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
<div class="flex_around">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
</body>
</html>
```

![flex](/blog/images/flex/5.png)

注：只有设置了flex-wrap: wrap;属性align-content才会生效

### align-items 不换行模式子元素垂直对齐方式

align-items属性定义项目在交叉轴上如何对齐。

flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">

        .flex_start{
            display: flex;
           
            align-items: flex-start;
            height: 80px;
            background: red;
        }
        .flex_end{
            display: flex;
          
            height: 80px;
            align-items: flex-end;
            background: green;
        }
         .flex_center{
            display: flex;
          
            height: 80px;
            align-items: center;
            background: yellow;
        }
         .flex_baseline{
            display: flex;
          
            height: 80px;
            align-items: baseline ;
            background: pink;
        }
         .flex_stretch{
            display: flex;
          
            height: 80px;
            align-items: stretch;
            background: orange;
        }

    </style>
</head>
<body>
<div class="flex_start">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_end">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_baseline">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
<div class="flex_stretch">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>

</body>
</html>
```
![flex](/blog/images/flex/6.png)

注：设置了flex-wrap: wrap;属性align-items不会生效; 基线选取方案是垂直方向由上到下选择大的

### order 排序

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .flex{
            display: flex;

        }
        .flex div:last-child{
            order: -1;
        }
    </style>
</head>
<body>
<div class="flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

</div>
</body>
</html>
```
![flex](/blog/images/flex/7.png)

###  flex-grow 剩余空间占比

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

如果没有剩余则无效果

剩余的数值500px 其中4个元素flex-grow属性都为1最后一个为2

为1的元素在原来的基础上增加 500 * 1 / (1 + 1 + 1 + 2) => 100 + 500*1/5 = 200px;


``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .flex{
            display: flex;
            background: red;
            width: 1000px;
        }
        .flex div{
        	width: 100px;
            flex-grow: 1;
        }
        .flex div:last-child{
            width: 200px;
            flex-grow: 2;
        }
    </style>
</head>
<body>
<div class="flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

</div>
</body>
</html>
```
![flex](/blog/images/flex/8.png)

### flex-shrink 超出空间占比

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效

如果没有超出也无效

当前元素大小-超出容器大小*加权比例

100 - 200 * (1 * 100/(1*100 + 1*100 + 1*100 + 2*200 )) = 71.43

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .flex{
            display: flex;
            background: red;
            width: 300px;
        }
        .flex div{
            width: 100px;
            flex-shrink: 1;
        }
        .flex div:last-child{
            width:200px;
            flex-shrink: 2;
        }
    </style>
</head>
<body>
<div class="flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

</div>
</body>
</html>
```
![flex](/blog/images/flex/9.png)

### flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

注：flex-basis会覆盖width 
``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .flex{
            display: flex;
            background: red;
            width: 1000px;
        }
        .flex div{
            flex-basis: 100px;
            width: 200px;
            flex-grow: 1;
        }
        .flex div:last-child{
            flex-basis: 200px;
            flex-grow: 2;
        }
    </style>
</head>
<body>
<div class="flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

</div>
</body>
</html>
```

![flex](/blog/images/flex/8.png)

### flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">

        .flex_start{
            display: flex;
           
            align-items: flex-start;
            height: 80px;
            background: red;
        }
        .flex_start div:last-child{
            align-self:flex-end;
        }
        
         .flex_stretch{
            display: flex;
          
            height: 80px;
            align-items: stretch;
            background: orange;
        }

    </style>
</head>
<body>
<div class="flex_start">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>

<div class="flex_stretch">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>

</body>
</html>
```

![flex](/blog/images/flex/10.png)
