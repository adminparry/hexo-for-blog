---
title: call和apply和bind
---
javascript 这门语言其特点为所有的东西都是函数，对象可以说为是构造函数的实例化，原始值也可以说是构造函数的实例化，所以函数作为所谓的一等公民去对待，那么函数也成为了最重要的探究方向，其中call和apply和bind的利用价值比较高，比如原型继承那里，比如说修改个上下文啥的
### 函数都给我们提供了什么
``` bash 
<script type="text/javascript">
	console.log(Object.getOwnPropertyNames(Function.prototype))
	// ["length", "name", "arguments", "caller", "apply", "bind", "call", "toString", "constructor"]
</script>
```

### call
``` bash
<script type="text/javascript">
	function aaa(name, age){
		this.name = name;
		this.age = age;
		return this;
	}
	var AAA = new aaa('you','11');
	console.log(AAA)//{name:'you',age:'11'}
	// 当然我们也可以不通过new来进行
	var json = {};
	var result = aaa.call(json,'you','22')//返回值为原函数的返回值
	console.log(json,result)

</script>
```

### apply
``` bash
<script type="text/javascript">
	// apply的用法与call大同小异
	function aaa(name, age){
		this.name = name;
		this.age = age;
		return this;
	}
	var AAA = new aaa('you','11');
	console.log(AAA)//{name:'you',age:'11'}
	// 当然我们也可以不通过new来进行
	var json = {};
	var result = aaa.apply(json,['you','22'])//返回值为原函数的返回值
	console.log(json,result)

	// 当然也可以接受arguments 
	function oneMax(){
		//接受arguments是理所应当的事情 本身就是arguments派生出来的
		// Array.prototype.slice.call(arguments)
		return Math.max.apply(null,arguments)
	}
	console.log(oneMax(2,4,6,7,3,4))//7
</script>
```

### bind
``` bash
<script type="text/javascript">
	// bind同样也是没什么区别 不过bind并不执行原函数而是原函数的拷贝 只不过在不同的浏览器里的兼容性不一致
	function aaa(name, age){
		this.name = name;
		this.age = age;
		return this;
	}
	var AAA = new aaa('you','11');
	console.log(AAA)//{name:'you',age:'11'}
	// 当然我们也可以不通过new来进行
	var json = {};
	var result = aaa.bind(json)//返回值为原函数
	console.log(aaa.bind(window) === window.aaa)//false
	var result1 = result('you','22')
	console.log(json,result1)

	// 兼容
	Function.prototype.bind =  Function.prototype.bind ||  function(context){
		if(typeof context !== 'object'){
			return this;
		}
		var noop = function(){};
		noop.prototype = this.prototype;

		var self = this;
		
		// var arg = Array.prototype.slice.call(arguments,1);
		
		var result = function(){
			
			// var ctx = self instanceof noop ? this : context;
			// var args = arg.concat(Array.prototype.slice.call(arguments));

			return context.apply(context, arguments)
			
		}
		
		// 原型拷贝
		result.prototype = new noop();
		return result;

	}
</script>
```


