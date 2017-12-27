---
title: js之预解析
---
在一个不熟悉JavaScript的程序员的眼中看来，知道作用域的事情，但是并不一定知道预解析的事情，作为前端开发避免不了要写JavaScript的，所以有必要了解JavaScript的细节，预解析也被叫做变量提升，在前面的函数的显式声明和隐式声明中有少许提到，今天对于这个细节做一个详细的概述


### 一个例子
``` bash
<script type="text/javascript">
	alert(a);//=> undefined

	var a = 9;

	alert(b);//=>function b
	alert(b());//=>2
	alert(a);//=>9

	function b(a){

		return a = 2;
	}

</script>
```

### 解析后
``` bash
<script type="text/javascript">
	var a;

	function b(a){
		// undefined = 2
		return a = 2;
	}

	alert(a);

	a = 9;
	alert(b);
	alert(b());
	alert(a);
	
</script>
```
### 规则
js解析器在运行js代码的时候 分为两步：

第一步 把所有的 变量、函数、参数 提前到当前作用域的顶部。
第二步 逐行解读代码 从左到右、从上至下。
表达式：= + - * / % ++ -- ! 参数 ...
表达式 可以修改 预解析后的值
``` bash

```
