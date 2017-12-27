---
title: css之文字垂直水平居中
---
div垂直水平居在之前的文章提到，实现起来也是多种多样，如果是文本节点，这个时候我们的需求是需要把文字展示在所在元素视图的正中心，也就是文字的垂直水平居中

## 快速开始

css样式对文字本身就有垂直水平居中的属性定义，text-align:center 可以把文字从行中间排列， line-height:10px 又是字体的行距，设置值为元素的高度就是正是为垂直居中的位置，前者我们在不知道宽度的情况下是可以设置的，而后者如果不知道这个元素的高度那就只能动态的获取元素的高度之后才能附加css样式

### 第一种未知高度的处理方式

tr标签可以使用vertrical-align样式来调整元素内部的垂直分布，利用属性转换把我们的元素display:table-cell这样转换为table内部标签然后通过vertical-align属性进行调整垂直的分布

``` bash
<style type="text/css">
	.vertical{
		display: table-cell;
		vertical-align: middle;
	}
</style>
<div class="vertical">
	我是中国人，不学日本语
</div>
```
### 第二种未知高度的处理方式
也是同样利用属性转换内联样式,利用伪类的height高度改变，类似改变line-height，但这种方法并不建议使用
``` bash
<style type="text/css">
	.vertical2{
		height: inherit;
	}
	.vertical2:after{
		display: inline-block;vertical-align: middle;
		width: 0;height: 100%;content: "";
	}
</style>
<div class="vertical2">
	我是中国人，不学日本语
</div>
```
