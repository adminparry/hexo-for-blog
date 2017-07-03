---
title: js之类型判断
---
类型判断想必是每个开发语言都需要接触的，然而每个开发语言的不同当然判断数据类型的方式也不一样，JavaScript虽然是弱类型语言但是其中也是有数据类型之分的，让我们一起喊出JavaScript的基本数据类型都有什么，字符串、数字、布尔、数组、对象、Null、Undefined

### typeof

``` bash
typeof true // "boolean"

typeof unde // "undefined"

typeof undefined // "undefined"

typeof 1 // "number"

typeof null // "object"

typeof "a" // "string"

typeof new Function // "function"

typeof new Array // "object"
```
一元运算符typeof 可以提供快速简单的类型检查
注意typeof一元运算符如果检查一个不存在的变量 程序不会报错 返回类型为undefined

### Object.prototype.toString.call

``` bash
Object.prototype.toString.call({});

//"[object Object]"

Object.prototype.toString.call([]);

//"[object Array]"

Object.prototype.toString.call(1);

//"[object Number]"

Object.prototype.toString.call("1");

//"[object String]"

Object.prototype.toString.call(null);

//"[object Null]"

Object.prototype.toString.call(undefined);

//"[object Undefined]"

Object.prototype.toString.call(true);

//"[object Boolean]"
```

用对象原型身上的toString方法，这样检查起来相对typeof给我们的结果会“精确”一点


