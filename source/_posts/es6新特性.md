---
title: es6新特性
---
ECMAScript6 简称ES6 是JavaScript语言的下一代标准，已经在2015年6月正式发布，他的目标是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言

ES6从开始制定到最后发布，整整用了15年。
2011年6月，ECMAscript 5.1版发布，并且成为ISO国际标准（ISO/IEC 16262:2011）。
2013年3月，ECMAScript 6草案冻结，不再添加新功能。新的功能设想将被放到ECMAScript 7。
2013年12月，ECMAScript 6草案发布。然后是12个月的讨论期，听取各方反馈。
2015年6月，ECMAScript 6正式通过，成为国际标准。从2000年算起，这时已经过去了15年。

### 箭头函数
``` bash
<script type="text/javascript">
// 不能被实例化
	var hello = () => {
		return this;
	}
	console.log(hello())
	// 默认返回值
	var hello2 = () => 9;
	console.log(hello2())
	var json = {}
	json.hello = hello.bind(json);
	// this不可获取上下文
	console.log(json.hello())
	

	Object.keys(window).forEach((item,index)=>console.log(item,index))
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
	// 遍历 无返回值
	var eachResult = arr.forEach(function(item,index,all){
		console.log(this,item,index,all);
		return 9;
	},context)
	console.log(eachResult)//无返回值 undefined
	// map
	// 遍历 返回一个新的数组
	var mapResult = arr.map(function(item,index,all){
		console.log(this,item,index,all)
		return item;
	},context)
	console.log(mapResult)//返回值为 arr
	// from
	// 返回一个新的数组类型
	function noop(){
		var arg = Array.from(arguments);
		console.log(arg)
	}
	noop(1,23,4,5,6,7,89)
	// copyWithin 
	// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
	var copyWithinResult = arr.copyWithin(0,2)
	// [5,6,7,4,3,6 ,3,6]
	
	// every
	// 遍历数组每个元素都满足条件找到则跳出 返回布尔值 注意会忽略空位
	var everyResult = arr.every((item,index,arr)=>{
		return typeof item == 'number'
	})
	// some
	// 遍历数组每个元素都满足条件找到不跳出 返回布尔值 注意会忽略空位
	var someResult = arr.some((item,index,arr)=>{
		return typeof item == 'number';
	})
	// fill
	// 填充一个数组 返回当前数组的引用
	// 第二个和第三个参数，用于指定填充的起始位置和结束位置。
	var fillResult = arr.fill(6,0,1)
	// [6,3,5,6,7,4,3,6];

	// filter
	// 按条件过滤数组 返回一个新数组
	var filterResult = arr.filter((item,index)=>{
		return arr.indexOf(item) == index;
	})
	console.log(filterResult)
	// find
	// 从前往后找 找到则跳出 返回满足条件的元素
	var findResult = arr.find((item,index,arr)=>{
		console.log(item,index,arr);
		return value > 5;
	})
	console.log(findResult)
	// findIndex
	// 从前往后找 找到则跳出 返回满足条件的元素的索引
	var findIndexResult = arr.findIndex((item,index,arr)=>{
		console.log(item,index,arr);
		return value > 5;
	})
	console.log(findIndexResult)
	// includes
	// 判断数组是否包含该元素  返回布尔值
	// 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
	// [1, 2, NaN].includes(NaN) // true 这个方法能够让我们轻松识别NaN
	var includesResult = arr.includes(7);
	console.log(includesResult);

	// indexOf
	var indexOfResult = arr.indexOf(3);
	console.log(indexOfResult);//1 找不到返回 -1
	// entries
	// values
	// keys
	//返回一个迭代器对象 [object Iterator] 与generator返回一样
	const entriesResult = arr.entries();//索引和值
	const valuesResult = arr.values();//值
	const keysResult = arr.keys();//索引
	console.log([...entriesResult]) //[[索引和值]]

	// lastIndexOf
	var lastIndexOfResult = arr.lastIndexOf(3);
	console.log(lastIndexOfResult);//6 找不到返回 -1
	// reduce
	// 遍历数组 阶交集
	var reduceResult = arr.reduce((result,next,count)=>{
		console.log(result,next,count)
		return result+next
	})
	console.log(reduceResult)
	// reduceRight
	// 跟reduce一样 不用是遍历方向相反
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
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值 
可以接受一个数组也可以接受一个迭代器作为初始化参数

``` bash
<script type="text/javascript">
	const s = new Set();

	[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

	for (let i of s) {
	  console.log(i);
	}
	// 2 3 5 4
	const set = new Set([1, 2, 3, 4, 4]);
	[...set]
	// [1, 2, 3, 4]
	
	
	// 去除数组的重复成员
	[...new Set(array)]
</script>
```
属性和方法
add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。
``` bash
<script type="text/javascript">
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);

	// 并集
	let union = new Set([...a, ...b]);
	// Set {1, 2, 3, 4}

	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	// set {2, 3}

	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	// Set {1}
</script>
```
那么现在我们对Set中放置对象一定很好奇 那么放置对象我们（比较同类型引用地址方式）
当然放置对象的还要个类似的方法	WeakSet
WeakSet 的成员只能是对象，而不能是其他类型的值

``` bash
<script type="text/javascript">
	const s = new Set([Math,Math]);
	s.size
	//1
</script>
```
在这里
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
http://es6.ruanyifeng.com














