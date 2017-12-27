---
title: js按引用传递和按值传递
---
在计算机领域有个词语叫做求值策略，它决定了变量之间，函数调用时实参和形参之间值是如何传递的，按值传递是常用的求值策略，函数的形参是被调用时所传实参的副本，修改形参并不会影响实参，按引用传递时，函数的形参接收实参的隐式引用，而不再是副本，形参和实参都指向相同的值

### 基本类型按值传递


``` bash
<script type="text/javascript">
	
	var a = 1;
	function foo(bar){
		bar = 2;
	}

	foo(a);

	console.log(a)//a没有被改变
</script>

``` 
### 引用类型按引用传递

``` bash
<script type="text/javascript">
	
	var a = { a:12 };
	function foo(bar){
		bar.a = 2;
	}

	foo(a);

	console.log(a)//a被改变
</script>

``` 



