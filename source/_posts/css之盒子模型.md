---
title: css之盒子模型
---
所有HTML元素可以看作盒子，在css中 box model 这一术语是用来设计和布局时使用
css 盒模型本质上是一个盒子，封装周围的HTML 元素 它包括 边距 边框 填充 和实际内容


### 盒子模型

1.设置浮动属性后，会对相邻的元素产生影响，相邻元素特指仅邻后面的元素。 
2.受到影响的元素清除flow影响的方法：clear：both；只适用于紧邻后面的元素的清楚浮动，而当父包含块缩成一条时就不起作用了。 
或者同时设置width：100%；+overflow：hidden;例p受到影响，p{clear:both;或者p{width：100%；overflow：hidden；} 
3.三种定位形式：static（静态）relative（相对）absolute（绝对） 
相对定位：相对于自身原有位置进行偏移；仍处于文档流中；随即拥有偏移属性和Z-index属性； 
绝对定位：建立以包含块为基准的定位；完全脱离了标准文档流；随即拥有偏移属性和Z-index属性； 
未设置偏移量，无定位祖先元素，以为参考基准 
使用absolute实现横向两列布局：relative-父元素相对定位；absolute-自适应宽度元素绝对定位

![box-model](/blog/images/盒模型/box_model.jpg)


### 层次结构

边框（border），

内容+内边距（content+padding），

背景图(background-image)，

背景颜色(background-color)，

外边距(margin)

![box-model](/blog/images/盒模型/box_model2.jpg)