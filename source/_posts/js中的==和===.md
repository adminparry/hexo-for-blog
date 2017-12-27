---
title: js中的==和===
---
在一些教程类的网站上并没有详细说明==和===的区别，即使有一些博客进行记录的其说明也大不相同，而由于运用的场景不同和js动态类型这个问题变得更加复杂让人难以琢磨


### 首先回顾数据类型
原始值:
空null 未定义undefined 字符串String 数字Number(NaN) 布尔Boolean Symbol
引用值:
数组Array 对象Object(Math) 函数Function(Date,Symbol)
null是一种特殊的object,NaN是一种特殊的number。

其实这个问题很简单
==是转换类型后进行比较(准确的说是比较原始值)

===是比较的引用地址

``` bash
//true 转化类型后 false == false
undefined == null

//false 引用地址不一致
undefined === null
[] === ![]


//false
//因为这两个对象都是一个新的引用
[] === []

//true
//因为这两个都是同一个引用
var arr = [];
arr === arr;
 
//true
<!-- 转化类型  [].valueOf().toString() -->
[] == false
//容易混淆 当引用类型与原始值类型比较时

<!-- Boolean([]) -->
if([]){
	alert("执行")
}
<!-- 执行 -->

<!-- 所有的引用类型转化为原始值都是true -->
!![] == false 
<!-- false -->

//false
[] == ![]
//![] 同样为布尔值[].valueOf().toString()返回""为false取反为true

{} == []
[] == []
// 双等比较两个不同引用对象是永远为false的

```
### 比较不同引用的两个对象

``` bash
function cmp( x, y ) {
	if(x == y){
		return true;
	}

}

```
ECMAScript 原始值和引用值
在 ECMAScript 中，变量可以存在两种类型的值，即原始值和引用值。
原始值
存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
引用值
存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。

存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。
为变量赋值时，ECMAScript 的解释程序必须判断该值是原始类型，还是引用类型。要实现这一点，解释程序则需尝试判断该值是否为 ECMAScript 的原始类型之一，即 Undefined、Null、Boolean、Number 和 String 型。由于这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 - 栈中。这样存储便于迅速查寻变量的值。

在许多语言中，字符串都被看作引用类型，而非原始类型，因为字符串的长度是可变的。ECMAScript 打破了这一传统。
如果一个值是引用类型的，那么它的存储空间将从堆中分配。由于引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。如下图所示：

![PrimitiveValue](/blog/images/PrimitiveValue/PrimitiveValue.gif)
原始类型
如前所述，ECMAScript 有 5 种原始类型（primitive type），即 Undefined、Null、Boolean、Number 和 String。ECMA-262 把术语类型（type）定义为值的一个集合，每种原始类型定义了它包含的值的范围及其字面量表示形式。
ECMAScript 提供了 typeof 运算符来判断一个值是否在某种类型的范围内。可以用这种运算符判断一个值是否表示一种原始类型：如果它是原始类型，还可以判断它表示哪种原始类型。

[参考地址w3cschool](http://www.w3school.com.cn/js/pro_js_value.asp)
