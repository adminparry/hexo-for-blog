---
title: css之display
---
dispaly 也叫属性转换 是css开发常用的标签属性转化的手段

对于css来说 html标签大致可以分为内联元素和块级元素

### 内联元素
常用内联的元素：
a , b , br , em , font , img , input , label , select , small , span , textarea 

①和其他元素都在一行上；
②高，行高及外边距和内边距部分可改变；
③宽度只与内容有关；
④行内元素只能容纳文本或者其他行内元素。
不可以设置宽高，其宽度随着内容增加，高度随字体大小而改变，内联元素可以设置外边界，但是外边界不对上下起作用，只能对左右起作用，也可以设置内边界，但是内边界在ie6中不对上下起作用，只能对左右起作用

### 块级元素
常用的块级元素：
address , center , div , dl , form , h1 , h2 , h3 , h4 , h5 , h6 , menu , ol , p , table , ul , li

①总是在新行上开始，占据一整行；
②高度，行高以及外边距和内边距都可控制；
③宽带始终是与浏览器宽度一样，与内容无关；
④它可以容纳内联元素和其他块元素。

### 行内块
对内联元素的增强 让内联元素也可以像块级元素一样设置原来不可设置的属性

vertical-align 属性会影响到 inline-block 元素，你可能会把它的值设置为 top 。
你需要设置每一列的宽度
如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙

### display

值	描述
none	此元素不会被显示。
block	此元素将显示为块级元素，此元素前后会带有换行符。
inline	默认。此元素会被显示为内联元素，元素前后没有换行符。
inline-block	行内块元素。（CSS2.1 新增的值）
list-item	此元素会作为列表显示。
run-in	此元素会根据上下文作为块级元素或内联元素显示。
compact	CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
marker	CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
table	此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
inline-table	此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。
table-row-group	此元素会作为一个或多个行的分组来显示（类似 <tbody>）。
table-header-group	此元素会作为一个或多个行的分组来显示（类似 <thead>）。
table-footer-group	此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。
table-row	此元素会作为一个表格行显示（类似 <tr>）。
table-column-group	此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。
table-column	此元素会作为一个单元格列显示（类似 <col>）
table-cell	此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
table-caption	此元素会作为一个表格标题显示（类似 <caption>）
inherit	规定应该从父元素继承 display 属性的值。
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.none{
			display: none;
		}
		.block{
			display: block;
		}
		.line{
			display: inline;
		}
		.inline-block{
			display: inline-block;
		}
		.item{
			display: list-item;
		}
		.table{
			display: table;border-collapse: collapse; border: 1px solid #aaa;
		}
		.table-header-group{
			display: table-header-group;
		}
		.table-row-group{
			display: table-row-group;
		}
		.table-row{
			display: table-row;
		}
		.table-cell{
			display: table-cell;border: 1px solid #aaa;
		}
		.table-footer-group{
			display: table-footer-group;
		}
	</style>
</head>
<body>
	<div class="none">你看不到我了</div>
	<span class="block">想不到吧 我是块级元素了</span>
	<div class="line">我以为我从来都不会变成内联元素呢</div>
	<span class="inline-block">是谁说我设置不了宽高的</span>
	<ul>
		<div class="item">从现在开始我就是li</div>
	</ul>
	<div class="table">
	    <div class="table-header-group">
	         <div class="table-row">
	            <div class="table-cell">head</div>
	            <div class="table-cell">head</div>
	        </div>    
	    </div>
	    <div class="table-row-group">
	        <div class="table-row">
	            <div class="table-cell">1234567</div>
	            <div class="table-cell">7654321</div>
	        </div> 
	    </div>
	    <div class="table-footer-group">
	         <div class="table-row">
	            <div class="table-cell">foot</div>
	            <div class="table-cell">foot</div>
	        </div>
        </div>
    </div>
</div>
</body>
</html>
```