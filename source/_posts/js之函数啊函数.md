---
title: js之函数啊函数
---
一门编程语言除了函数就是数据结构了，所以函数这个概念理解清楚的前提下你已经掌握了80%左右了

### 声明
``` bash
<script type="text/javascript">
	/*显式声明*/
	var bbb = function(){

	}
	/*隐式声明*/
	function aaa(){

	}
</script>
``` 
### 调用
``` bash
<script type="text/javascript">
	function aaa(){
		alert(9)
	}
	new aaa();
	aaa();
	aaa.call();
	aaa.apply();
</script>
``` 
### 名字和被调用的人
``` bash
<script type="text/javascript">
	function aaa(){
		/*该特性是非标准的，请尽量不要在生产环境中使用它！*/
		console.log(aaa.caller)//在全局作用下返回null 否则返回他的父函数的引用
	}
	aaa()
	function bbb(){
		aaa()
	}
	bbb();
	console.log(bbb.name)//函数的名字 如果是匿名函数为空字符串
</script>
```
### 参数
``` bash
<script type="text/javascript">
	/*获取所有的参数*/
	function aaa(){
		/*likeArray[1,4,6,7,8,9]*/
		console.log(arguments)
	}
	aaa(1,4,6,7,8,9)
	/*javascript中的参数为不定参*/
	function bbb(a,b){
		/*初始化变量为undefined*/
		console.log(a,b)
	}
	bbb();
	/*参数的个数 声明中的参数个数*/
	function ccc(a,b){

	}
	console.log(ccc.length)
</script>
``` 



### 返回值

``` bash
<script type="text/javascript">
	/*函数默认返回值也为undefined*/
	function aaa(){

	}
	console.log(aaa())

	function bbb(){
		return false;
	}
	console.log(bbb())
	/*实例化调用为一个全新的空Object*/
	function ccc(){

	}
	console.log(new ccc())
</script>
``` 

### 实现一个add函数


``` bash
<!-- 要求使用的方式为add(1)(2)(3)... 最后得出结果 -->
<script type="text/javascript">
	/*貌似add(1)要返回一个函数 问题来了如果是调用的话就返回函数如果不调用的话就返回值 */
	function add(num){
		var total = Number();

		total += num;

		
		function callback(nextNum){
			
			total += nextNum;
			/*如果不再调用*/
			return total
			/*如果还能调用 在这里利用闭包来保存这个total*/
			return callback;
		}

		
		return callback;
	}

	function add(num){
		var total = Number();

		total += num;

		
		function callback(nextNum){
			
			total += nextNum;
			/*如果不再调用*/
			return total
			/*如果还能调用 在这里利用闭包来保存这个total*/
			return callback;
		}
		/*函数如果不被调用用于取值的话默认会调用toString和valueOf方法*/
		callback.toString = function(){
			return total;
		}
		
		return callback;
	}
	/*原理就在这里*/
	function tester(){
		return 'tester'
	}
	tester.valueOf = function(){
		return '1111';
	}
	tester.toString = function(){
		return '2222'
	}
	
	console.log(tester);
	console.log(tester())
</script>

```



