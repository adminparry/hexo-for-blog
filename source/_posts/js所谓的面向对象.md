---
title: js所谓的面向对象
---
对于JavaScript是不是面向对象语言这里不说，因为我们没必要争执这个问题，JavaScript不提供给我们extend关键字，至于说es5,6,7的我就不说什么了，那只是babel给我们转化的问题，有的人说JavaScript的发烧友都在玩语法糖，我也希望有一天尝尝甜不甜


### 声明一个类

由于js先天性的原型链特性 所以我们利用构造函数来模拟类的实现是容易的

``` bash
<script type="text/javascript">
	function Drag(ele){
		// <!-- 这里可以添加成员属性 -->
		this.drager = ele;
	}
	// <!-- 这里可以添加成员方法 -->
	Drag.prototype.init = function(){
		alert('开始赋予这个元素拖拽能力')
	}
	new Drag(window.drag).init();
</script>

```
类也叫构造函数或者构造方法，通常首字母都是大写，这种写法是最通用的，因为我们仅仅想要一个构造方法而已。
我们在调用的时候需要new关键字来叫做实例化这个构造函数也就是这个类
封装 继承 多态 可谓是面向对象的三大特征

### 封装  

``` bash
<script type="text/javascript">
	// <!-- 封装 给构造函数添加属性和方法 -->
	function Employee(){
		this.name = 'employee';
	}
	Employee.prototype = {
		Create:function(){

		},
		Retrieve:function(){

		},
		Update:function(){

		},
		Delete:function(){

		}
	}
</script>

```
由于JavaScript没有公私分明的概念，所以
封装即是包装，包装你的对象让他具有什么样的能力	

### 继承

``` bash
<script type="text/javascript">
	// <!-- 父类 -->
	function Animal(){
		this.age = 60;
		this.name = '动物';
	}
	Animal.prototype.eat = function(){
		return '不吃饭就会被饿死';
	}
	// <!-- 子类 -->
	function Dog(){
		Animal.call(this);
	}
	// <!-- 把父类的实例对象赋给子类的原型 -->
	Dog.prototype = new Animal();
	// <!-- 默认构造器 -->
	Dog.prototype.constructor = Dog;

	var dog = new Dog();

	alert(dog.eat())

</script>

```
JavaScript没有给我们提供extend关键字，所以继承的操作需要手动进行，不过这样也好，可以进行不仅仅是多重继承


### 多态

父类引用指向子类对象，调用方法时会调用子类的实现，而不是父类的实现，这叫多态

``` bash
<script type="text/javascript">
	function Base(){
		this.say = function(){
			return this.hello();
		}	
	}
	function A(){
		this.hello = function(){
			return 'A';
		}
	}
	function B(){
		this.hello = function(){
			return 'B';
		}
	}
	A.prototype = new Base();
	B.prototype = new Base();
	var a = new A;
	var b = new B;
	alert(a.say());
	alert(b.say());
</script>


```
多态不是面向对象所特有的所以在这里也只是为了方便展示	
