---
title: js设计模式
---
设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的；设计模式使代码编写真正工程化；设计模式是软件工程的基石脉络，如同大厦的结构一样。


### 构造函数模式

``` bash
function Class(par){
	if( !(this instanceof Class) ){
		return new Class(par)
	}
	//属性
	this.prop = "function";
	//参数
	this.params = par;
	//方法
	this.method = function(){
		return {prop:this.prop,params:this.params}
	}
}

```
js里没有类的概念，但是有特殊的构造函数，通过new关键字调用构造函数

### 单例模式

``` bash
var singlton = {
	a:1,
	b:function(){
		var name = "single dog";
		return name;
	}
	 
}
```

单例模式非常适用于一种情形的生产，也体现出了职责单一原则

### 模板模式

``` bash
 function Parent(){
 	this.prop = "y";
 }
 parent.prototype.name = function(){
 	return Parent.name
 }
 parent.prototype.age = function(){

 }
 function Child(){
 	Parent.call(this)
 }
 Child.prototype = new Parent();
 Child.prototype.constructor = Child;

 Child.prototype.name = function(){
 	return Child.name
 }
 模板模式是简单复用的形式，当然我们的原型继承就是利用这个特性
```
### 装饰者模式

``` bash
	function noop(){}
	noop.prototype.rect = function(a){
		console.log('balabala',a)
	}
	function over(c){
		this.copy = c;
	}
	over.prototype.rect = function(a,b){
		this.copy.prototype.rect.call(this,a);

		console.log('bb',b)
	}
	var o = new over(noop);
	o.rect(1,3)
```
### 中介者模式

``` bash
function mid(name){
	this.name = name;
}
mid.prototype.set = function(a,b){
	reject().set.apply(this,arguments)
}
mid.prototype.get = function(m){
	console.log(m)
}

function reject(){
	
	if( !(this instanceof reject) ){
		return new reject();
	}
	

}
reject.prototype.msg = {}

reject.prototype.set = function(m){
	
	reject.prototype.msg[this.name].get(m)
}
reject.prototype.resolve = function(obj){
	
	this.msg[obj.name] = obj;

}
var obj1 = new mid('a');
var obj2 = new mid('b');
var rej = reject();

rej.resolve(obj1);
rej.resolve(obj2);

obj1.set('q')
	
```

### 观察者模式

``` bash
function Observable(){
	if( !(this instanceof Observable) ){
		return new Observable()
	}
}
Observable.prototype.map = {};
Observable.prototype.on = function(key,fn){
	
	if(this.map[key] == void 0){
		this.map[key] = [fn];
	}else{
		this.map[key].push(fn);
	}	
	
}
Observable.prototype.off = function(){
	
}
Observable.prototype.trigger = function(){
	var i=0,
	arrPro = Array.prototype,
	arg1 = arguments[0],
	arg2 = arrPro.slice.call(arguments,1).join(','),
	len = arg2.length,
	map = this.map;
	

	for(var name in map){
		if(name == arg1){
			for(;i<map[name].length;i++ ){
				var fn = map[name][i].toString();
				new Function('!' + fn + '('+ arg2 +')')();
				 
			}
		}
	}
}

var hook = new Observable();

hook.on('a',function(a,b,c,d){
	console.log(a,b,c,d);
})
hook.on('a',function(a,b){
	console.log(a,b);
})
hook.trigger('a',[1,3,5,4,3,3,4,4,3,3,34,3,4,5,5,4,3,3,3,4,5,5]);
	
```


### 命令模式

``` bash
	
```

### 迭代器模式

1、访问一个聚合对象的内容而无须暴露它的内部表示。 2、需要为聚合对象提供多种遍历方式。 3、为遍历不同的聚合结构提供一个统一的接口。

``` bash
<script type="text/javascript">
	
	var arr = [1,32,4,6,7,5,4];

	function iterator(arr){
		this.arr = arr;
		this.length = arr.length;
		this.index = 0;
	}
	iterator.prototype.hasNext = function(){
		return this.index < this.length;
	}
	iterator.prototype.next = function(){
		return this.arr[this.index++]
	}
	var tor = new iterator(arr);

	while(tor.hasNext()){
		console.log(tor.next())
	}
</script>
	
```
### 外观模式

使用一个方法去内部执行多个需要调用的方法

``` bash
<script type="text/javascript">
	function preventAndBubble(ev){
		ev.stopPropergation();
		ev.preventDefault();
	}

</script>
	
```

### 组合模式

``` bash
	
```

### 策略模式

 1、如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。 2、一个系统需要动态地在几种算法中选择一种。 3、如果一个对象有很多的行为，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。

``` bash
<script type="text/javascript">
	/*
 * 缓动算法: 接收4个参数，分别表示： 动画已消失的时间， 小球原始位置， 小球目标位置， 动画持续的总时间
 */
var tween = {
    linear: function(t, b, c, d){
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){
        return c * ( t /= d ) * t + b;
    },
    strongEaseIn: function(t, b, c, d){
        return c * ( t /= d ) * t * t * t * t + b;
    },
    strongEaseOut: function(t, b, c, d){
        return c * ( ( t = t / d -1 ) * t * t * t * t + 1 ) + b;
    },
    sineaseIn: function(t, b, c, d){
        return c * ( t /= d ) * t * t + b;
    },
    sineaseOut: function(t, b, c, d){
        return c * ( ( t = t / d -1 ) * t * t + 1 ) +b;
    }
};
</script>	
```

### 建造者模式

1、需要生成的对象具有复杂的内部结构。 2、需要生成的对象内部属性本身相互依赖。

``` bash
<script type="text/javascript">
	function dom(ele){
		this.ele = ele;
		
	}
	dom.prototype.getClass = function(){
		this.curClass = this.ele.className.match(/\S+/g);
	
		var json = {};
		
		
		this.curClass.forEach(function(item,index){
			json[item] = index;
		})

		return json;
	}
	dom.prototype.addClass = function(str){
		
		var has = this.hasClass(str);

		this.ele.className = this.curClass.concat(this.uncommon).join(' ')

	}
	dom.prototype.hasClass = function(str){
		var arr = str.match(/\S+/g);
		
		var common = [];
		var uncommon = [];
		var json = this.getClass();

		arr.forEach(function(item,index){
			if(item in json){
				common.push(item);
			}else{
				uncommon.push(item);
			}
		})
		this.common = common;
		this.uncommon = uncommon;

		return common.length > 0 ? false : true;
	}
	dom.prototype.removeClass = function(str){
		//...
	}
</script>

```
### 原型模式

``` bash
var json = {
	name:"prop",
	age:26,
	method:{
		a:function(a){return a},
		b:this
	},
	length:[2,45]

}
function clone(obj){
	var ret,b,k;
	obj instanceof Array ;
	obj instanceof Object ;
	for( k in obj ){
		ret[k] = obj[k];
	}
	return ret;
}
```
http://www.cnblogs.com/tugenhua0707/p/5198407.html





















