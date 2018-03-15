---
title: js之作用域
---
对于程序设计人员来讲从事哪一门语言的人们都会有这样的概念就是程序执行上下文，所以说一说js的上下文，因为大多数前端面试题都包含的程序设计基础

## 快速开始

### 创建一个html文件

``` bash
$ touch index.html
```

### 我们看下面这段代码

``` bash
<script type="text/javascript">
	var a = 100;
	function aaa(){
		alert(a);
		alert(b);
		var a = 999;
	    function b(){
			return 99
		};
		
		
	}
	aaa();
</script>
	
```

我们在全局声明了一个变量a还有个函数aaa 然而函数aaa直接进行调用，
在函数aaa里面局部a和b，分别弹出a和b的值
分别得到undefined 和 函数b
undefined的原因是因为
1.作用域链首先要在aaa局部变量里进行查找，发现是有a的，（当然如果没有a的话就报错了a is not defined）
a我们给的是999 如果我们这样写的话就如同下面的例子

### 例子

``` bash
<script type="text/javascript">
	var a = 100;
	function aaa(){
		var a;
		function b(){
			return 99
		};
		alert(a);
		alert(b);
		a = 999;
		
		
	}
	aaa();
</script>
	
```
所以我们得到的是undefined，因为js变量默认初始化的值是undefined
然而我们的b是能正确弹出的是因为b为函数的隐式声明如果改成显示声明结果就是undefined了是一样的道理
如下


``` bash
<script type="text/javascript">
	var a = 100;
	function aaa(){
		alert(a);
		alert(b);
		var a = 999;
	    var b = function(){
			return 99
		};
		
		
	}
	aaa();
</script>

```
作用域链这个好理解就是局部变量没有就会向上进行查找具体会在作用域原型链上进行详细描述
### 作用域链
``` bash
<script type="text/javascript">
	var a = 100;
	function aaa(){
		alert(a);

	}
	aaa();
</script>
	
```
在这里弹出100
aaa中没有变量a 会向父级进行查找以此类推 如果最终还是找不到想必还是报错的 ? is not defined
