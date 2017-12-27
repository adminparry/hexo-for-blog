---
title: js之从原型链追溯起源
---

### 模拟原型链
``` bash
<script type="text/javascript">
	var myObject = new MyObject();
	
	myObject.myvalueOf = function(){}
	myObject.mytoString = function(){};
	myObject.__proto = null;

	var hook = function(){var hook;}
	hook.name = 'MyObject';
	hook.constructor = MyFunction;
	hook.__proto = myObject;
	hook.prototype = void 0;

	function MyObject(){
		
		this.__proto = myObject;
		
	}
	MyObject.constructor = MyFunction;
	MyObject.__proto = hook;
	MyObject.prototype = myObject;
	MyObject.prototype.constructor = MyObject;

	function MyFunction(){
		this.mycall = function(){}
		this.__proto = hook;
	}
	MyFunction.constructor = MyFunction;
	MyFunction.__proto = MyFunction.prototype = hook;


	function MyString(){
		this.mylength = arguments.length;
		
		this.__proto = myObject;
	}
	MyString.__proto = hook;
	MyString.constructor = MyFunction;
	MyString.prototype = {
		substring:function(){},
		__proto:myObject
	}
	MyString.prototype.constructor = MyString;

	console.log(MyFunction.prototype === MyFunction.__proto)
	console.log(MyFunction.constructor === MyFunction.constructor)
	console.log(MyFunction.__proto === MyString.__proto)
	console.log(MyFunction.__proto === MyObject.__proto)
	console.log(MyString.prototype.__proto === MyObject.prototype)

</script>
```
https://github.com/manxisuo/blog/issues/15


