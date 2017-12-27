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

```
### let const 与块级作用域

``` bash
for( let i = 0; i < arr.length; i++){}
console.log(i)
//ReferenceError 
```
let 与 const 不存在预解析问题
块级作用域一般是指由{}包含的代码块

### 解构赋值

``` bash
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

```
扩展运算符 ...可以将某些数据结构转换为数组

### 字符串扩展

``` bash

```

### 正则的扩展

``` bash

```
### 数字的扩展

``` bash

```

### 数组的扩展

``` bash

```
### 函数的扩展

``` bash

```
### Symbol

``` bash

```
### Proxy和Reflect

``` bash

```

### Set和Map数据结构

``` bash

```
### Iterator 和 for...of 循环

``` bash

```

### Generator函数

``` bash

```

### Promise对象

``` bash

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















