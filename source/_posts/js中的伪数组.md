---
title: js中的伪数组
---
likeArray这里词语听起来就是像一个数组,但实际意义上跟数组有和区别呢,接触前端的同学来说多多少少听过这个词语,而且还是经常出现的,例如jQuery对象就是把数据结构定义为了伪数组,或者我们进行选择元素的时候NodeList,HTMLCollection都是为伪数组的,可以进行遍历,原型上也只有对象的基本方法,并不能直接使用数组的方法,但是间接可以使用


### 函数的arguments
``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

</head>
<body>

</body>
<script type="text/javascript">
	function noop(){
		console.log(arguments)
	}
	noop(1,3,4,5)
</script>
</html>
```

### NodeList&HTMLCollection
``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

</head>
<body>
	<div class="btn">按钮</div>
</body>
<script type="text/javascript">
	var btn = document.getElementsByClassName('btn');
	// HTMLCollection
	console.log(Object.prototype.toString.call(btn))
	// NodeList
	console.log(Object.prototype.toString.call(btn.childNodes))
</script>
</html>
```

### 数组和伪数组的互相转换
伪数组的构成为对象 对象的属性中必须包含length属性 对象的原型链上必须包含splice方法
``` bash

<script type="text/javascript">
	// 伪数组转化为数组
	function action(){
		//1 直接赋给原型链
		arguments.__proto__ = Array.prototype;
		//2 让其原型链上拥有数组的原型方法
		var likeArray = Array.prototype.slice.call(arguments);
		console.log(likeArray)
		// 当然我们也可以利用apply
		var invock = Array.prototype.push.apply(67,arguments);
		console.log(invock)	
	}
	action(1,4,67)
</script>

```


http://www.cnblogs.com/NTWang/p/6280447.html