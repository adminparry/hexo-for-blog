---
title: babel
---
随着es的兴起  很多低版本浏览器没有得到支持 为了兼容低版本的浏览器 这样就使用不了es6的便捷语法 于是babel就诞生了 它能够把es6的代码转化为低版本浏览器可运行的es3代码

### 箭头函数
``` bash
<script type="text/javascript">
	var a = () => 8;
	var b = () =>{
	 conosle.log('b') 
	}
</script>
```
转换方式
```
<script type="text/javascript">
	"use strict";

	var a = function a() {
	  return 8;
	};
</script>
```
### let const 与块级作用域

``` bash
<script type="text/javascript">
	var v = 1;
	let l = 2;
	const c = 3;
	console.log(window.v);//1
	console.log(window.l);//undefined
	console.log(window.c);//undefined

	l = l * l;//4
	c = c * c;//typeError 不能被修改

	for( let i = 0; i < arr.length; i++){}
	console.log(i)//ReferenceError 
	
	// 函数不具有块级作用域
	function a(){
		console.log(a.name)
	}
	function b(){
		if(false){
			function a(){console.log(b.name)}
		}
		a();
	}
	b();
</script>
```
let 与 const 不存在预解析问题


### 解构赋值

``` bash
<script type="text/javascript">
// 数组的解构赋值
var [a, b, c] = [1, 2, 3];   //a=1, b=2, c=3
var [, , c] = [1, 2, 3];   //c=3
var [x, , y] = [1, 2, 3];  //x=1, y=3
var [head, ...tail] = [1, 2, 3, 4];   //head = 1, tail = [2, 3, 4];
var [x, y, ...z] = [1];   //x=1, y=undefined, z=[];
var [a, [b, c], d] = [1, [2, 3], 4];   //a=1.b=2, c=3, d=4
var [a, [b], d] = [1, [2, 3], 4];   //a=1.b=2, d=4

// babel中的转化
var [a,b,c,d] = [1,3,4]

//=>
"use strict";

var _ref = [1, 3, 4],
    a = _ref[0],
    b = _ref[1],
    c = _ref[2],
    d = _ref[3];
//================================
var [x = 1 ] = [null]
    //=>
    "use strict";

var _ref = null,
    x = _ref === undefined ? 1 : _ref;
//=================================
var {foo:baz} = {foo:'aaa',bar:'bbb'}
//=>
'use strict';

var _foo$bar = { foo: 'aaa', bar: 'bbb' },
    baz = _foo$bar.foo;
    // 默认值为undefined
var [a=1, b] = [];   //a=1, b=undefined
var [a=1, b] = [2, 3];  //a=2, b=3
var [a=1, b] = [undefined, 3];   //a=1.b=3
var [a=1, b] = [null, 3];  //a=null, b=3
var [a=1, b] = [NaN, 3];  //a=NaN, b=3

function f(){
  console.log("done");
  return 2;
}
var [a=f()] = [1];    //a=1
var [a=f()] = [];    //a=2, 输出 "done"
// 对象的解构赋值
var {name:alias} = {name:'Bob'};  //alias='Bob'
console.log(name);   //"global"
console.log(alias);   //"Bob"

var {foo:{bar}} = {ba: 2};   //报错

</script>
```
扩展运算符 ...可以将某些数据结构转换为数组
``` bash
<script type="text/javascript">
	var func = ( ...single ) =>{
		console.log(Object.prototype.toString.call(single))
	}
	func(1,2,4)
	func({name:4,value:5})
	// 
	console.log(1, ...[2, 3, 4], 5);
	var more = [4, 5];
	var arr = [1, 2, 3, ...more];    //[1, 2, 3, 4, 5]

	var a1 = [1, 2];
	var a2 = [3, 4];
	var a3 = [5, 6];
	var a = [...a1, ...a2, ...a3];     //[1, 2, 3, 4, 5, 6]
	// 
	var str = "hello";
	var alpha = [...str];    //alpha = ['h', 'e', 'l', 'l', 'o']

	[...'x\uD83D\uDE80y'].length;   //3, 正确处理32位 unicode 字符
</script>
```
### 数字的扩展
``` bash
<script type="text/javascript">
	// 支持二进制和八进制 
	Number('0b1101');   //13
	Number('0o107');    //71
	// 
	Number.parseInt === window.parseInt;     //true
	Number.parseFloat === window.parseFloat;     //true
	// 
	Number.isInteger(3.0)
	// Number.EPSILON
	0.1 + 0.2 - 0.3 < Number.EPSILON;
	// 
	Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1;   //true
	Number.MIN_SAFE_INTEGER === -Math.pow(2, 53) + 1;    //true

</script>
```
### Math扩展
``` bash
<script type="text/javascript">
	Math.trunc(); //直接舍去一个数的小数部分。对于无法转换为数值的参数, 返回 NaN
	Math.sign(); //符合函数。传入正数返回1, 负数返回-1, 0返回0, -0返回-0, 其他值返回 NaN
	Math.cbrt(); //返回一个数的立方根。对于无法转换为数值的参数, 返回 NaN
	Math.clz32(); //返回一个数的32位无符号二进制的前导零个数。对于小数, 只考虑器整数部分, 对于无法转换为数值的参数, 返回 32
	Math.imul(); //返回2个数有符号32位乘积的十进制, 相当于(a*b)|0, 通常和乘法计算一致, 但可防止结果溢出
	Math.fround(); //返回一个数的单精度浮点形式。对于无法转换为数值的参数, 返回 NaN
	Math.hypot(); //返回所以函数平方和的平方根(欧氏距离)。只要有1个无法转换为数值的参数, 返回 NaN
	Math.expm1(); //即ex−1
	Math.log1p(); //即ln(x+1), 参数小于0或不能转换为大于零的数, 返回 NaN
	Math.log10(); //即log10x, 参数小于0或不能转换为大于零的数, 返回 NaN
	Math.log2(); //即log2x, 参数小于0或不能转换为大于零的数, 返回 NaN
	Math.sinh(); //返回参数的双曲正弦值
	Math.cosh(); //返回参数的双曲余弦值
	Math.tanh(); //返回参数的双曲正切值
	Math.asinh(); //返回参数的反双曲正弦值
	Math.acosh(); //返回参数的反双曲余弦值
	Math.atanh(); //返回参数的反双曲正切值
</script>
```
### 字符串扩展

``` bash
<script type="text/javascript">
	//以下结果都是 true
	"\x7A" === "z";
	"\u{7A}" === "z";
	"\u007A" === "z";
	"\172" === "z";
	"\z" === "z";
</script>
```

### 正则的扩展

修饰符	描述	描述
m	multiline	多行模式
i	ignore case	忽略大小写模式
g	global match	全局匹配模式
u	unicode	unicode模式
y	sticky	粘连模式

``` bash
<script type="text/javascript">
	var reg = /aaabbb/img;
	var regRet = new RegExp(reg,'g');//可以直接传入正则
	/^\uD83D/.test("\uD83D\uDC2A");//兼容Unicode
	// unicode模式
	/^\uD83D/u.test("\uD83D\uDC2A"); //false

</script>
```
### 数组的扩展

``` bash
<script type="text/javascript">
	var arr = [1,3,5,6,7,4,3,6];

	var context = {
		name:666
	}
	// forEach
	var eachResult = arr.forEach(function(item,index,all){
		console.log(this,item,index,all);
		return 9;
	},context)
	console.log(eachResult)//无返回值 undefined
	// map
	var mapResult = arr.map(function(item,index,all){
		console.log(this,item,index,all)
		return item;
	},context)
	console.log(mapResult)//返回值为 arr
	// from
	function noop(){
		var arg = Array.from(arguments);
		console.log(arg)
	}
	noop(1,23,4,5,6,7,89)
	// copyWithin
	// entries
	// every
	// fill
	// filter
	// find
	// findIndex
	// includes
	// indexOf
	var indexOfResult = arr.indexOf(3);
	console.log(indexOfResult);//1 找不到返回 -1
	// keys
	//返回一个迭代器对象 [object Iterator] 与generator返回一样

	// lastIndexOf
	var lastIndexOfResult = arr.lastIndexOf(3);
	console.log(lastIndexOfResult);//6 找不到返回 -1
	// reduce
	// reduceRight
	// some
</script>
```
### 函数的扩展

``` bash
<script type="text/javascript">
	function fun(a=2){
	  console.log(a);
	}
	fun();   //2
	fun(0);  //0
	fun(1);  //1
		// 参数传递
	function f([x, y, z=4]){
	  return [x+1, y+2, z+3];
	}
	var [a, b, c] = f([1, 2]);  //a=2, b=4, c=7
	[[1, 2], [3, 4]].map(([a, b]) => a + b);   //返回 [3, 7]
	// 尾调用
	"use strict";
	function factorial(n, result = 1){
	  if(n <= 1) return result;
	  return factorial(n - 1, n * result);
	}
	factorial(5);     //120
</script>
```
### Symbol

``` bash

```
### Reflect(反射)

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的


apply
``` bash
<script type="text/javascript">
	// apply
	Reflect.apply(Math.floor, undefined, [1.75]) // 1
	// 相当于
	Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1
</script>
```
construct
``` bash
<script type="text/javascript">
	// construct
	class Aniaml {
		constructor(a){
			this.age = a;
		}
	}
	Reflect.construct(Aniaml, [2])
	// 相当于
	new Aniaml(2);
</script>
```
defineProperty
``` bash
<script type="text/javascript">
	// defineProperty
	var obj = {
		no:'no',
		yes:'yes'
	}
	var ret1 = Reflect.defineProperty(obj,'no',{
		get:()=>'no no no'
	})
	// 相当于
	var ret2 = Object.defineProperty(obj,'no',{

	})
	// 但是返回值不同
	console.log(ret1,ret2);
	console.log(obj.no);

</script>
```
deleteProperty
``` bash
<script type="text/javascript">
	// deleteProperty
	var obj = {
		name:'everyBody'
	}
	var ret = Reflect.deleteProperty(obj,'name');
	// 相当于
	delete obj['name'];

	console.log(obj);

</script>
```
has
``` bash
<script type="text/javascript">
	// has
	var obj = {
		name:'everyBody'
	}
	var ret = Reflect.has(obj,'name');
	// 相当于
	'name' in obj;

	console.log(ret);
</script>
```

set
``` bash
<script type="text/javascript">
	// set
	var obj = {
		name:'everyBody'
	}
	var ret = Reflect.set(obj,'name','es6');

	console.log(ret);

	// 相当于
	obj['name'] = 'es3';

	
</script>
```
ownKeys
``` bash
<script type="text/javascript">
// ownKeys
	var myObject = {
	  foo: 1,
	  bar: 2,
	  [Symbol.for('baz')]: 3,
	  [Symbol.for('bing')]: 4,
	};
	var ret = Reflect.ownKeys(myObject);
	// 相当于
	Object.getOwnPropertyNames(myObject).concat(Object.getOwnPropertySymbols(myObject));

	console.log(ret)
</script>
```
### Proxy(代理)

用来定义一个代理对象其对象的属性为自定义方法进行控制


``` bash
<script type="text/javascript">
	var proxy = new Proxy({},{
	  get: function(target, key){
	    return 35;
	  }
	});
	console.log(proxy.time);    //35
	console.log(proxy.name);    //35
	console.log(proxy.title);    //35
	//被代理的对象无论输入什么属性都返回35
</script>
```
proxy 对象也可以被继承

``` bash
<script type="text/javascript">
	var proxy = new Proxy({},{
	  get: function(target, key){
	    return 35;
	  }
	});
	var obj = Object.create(proxy);
	obj.time = 20;
	console.log(obj.time);    //20
	console.log(obj.name);    //35
</script>

```
get(target, propKey, receiver = target) 
拦截对象的读取属性。当 target 对象设置了 propKey 属性的 get 函数时，receiver 绑定 get 函数的 this。返回值任意
set(target, propKey, value, receiver = target) 
拦截对象的写入属性。返回一个布尔值
has(target, propKey) 
拦截 propKey in proxy 操作符，返回一个布尔值
deleteProperty(target, propKey) 
拦截 delete proxy[propKey] 操作符，返回一个布尔值
enumerate(target) 
拦截 for(let i in proxy) 遍历器，返回一个遍历器
hasOwn(target, propKey) 
拦截 proxy.hasOwnProperty(‘foo’)，返回一个布尔值
ownKeys(target) 
拦截 Object.getOwnPropertyNames(proxy), Object.getOwnPropertySymbols(proxy), Object.keys(proxy)，返回一个数组。该方法返回对象所有自身属性，包括不可遍历属性，不包括 Symble属性，但是Object.keys(proxy)不应该包括不可遍历属性
getOwnPropertyDescriptor(target, propKey) 
拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回其属性描述符
defineProperty(target, propKey, propDesc) 
拦截 Object.defineProperty(proxy, propKey, propDesc), Object.defineProperties(proxy, propDesc)，返回一个布尔值
preventExtensions(target) 
拦截 Object.preventExtensions(proxy)，返回一个布尔值
getPrototypeOf(target) 
拦截 Object.getPrototypeOf(proxy)，返回一个对象
isExtensible(target) 
拦截 Object.isExtensible(proxy)，返回一个布尔值
setPrototypeOf(target, proto) 
拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值
apply(target, object, args) 
拦截对 proxy 实例的函数操作，包括 proxy(…args),proxy.call(object, …args),proxy.apply(object, args)
construct(target, args, proxy) 
拦截用 new 调用 proxy 函数的操作，construct()返回的不是对象会报错

``` bash
<script type="text/javascript">
	var obj = new Proxy({}, {
	  get: function(target, key, receiver){
	    console.log(`getting ${key} ...`);
	    return Reflect.get(target, key, receiver);
	  },
	  set: function(target, key, value, receiver){
	    console.log(`setting ${key} ...`);
	    return Reflect.set(target, key, value, receiver);
	  }
	});

	obj.count = 1;            //setting count ...
	++obj.count;              //getting count ...
	                          //setting count ...
	console.log(obj.count);   //getting count ...
	                          //2
</script>


让Object操作都变成函数行为(替代行为)

``` bash
<script type="text/javascript">
	var json = {
		name:'hanmeimei',
		age:76
	}
	console.log('name' in json); //true
	console.log(Reflect.has(Object, 'name'))
</script>
```

```
### Set和Map数据结构

``` bash

```
### Iterator 和 for...of 循环

``` bash

```

### Generator函数

``` bash
<script type="text/javascript">
	function* generator(x){
		var y = yield x + 2;
		yield 3;
		yield 4;
		yield 5;
		yield 6;

		return y;
	}

	for (let v of generator()) {
	  console.log(v);
	}
</script>
```

### Promise对象

``` bash
<script type="text/javascript">
	
</script>
```

### 异步操作和Async函数

``` bash

```

### Class

``` bash

```
### Decorator

``` bash

```
类的修饰器
### Module

``` bash

```
### ArrayBuffer
``` bash
```
http://blog.csdn.net/faremax/article/details/73480861














