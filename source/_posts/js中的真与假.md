---
title: js中的真与假及隐式转化
---
真真假假假假真真，我们都知道true代表真，false代表假，为程序流程控制起到重要的意义但是在隐式转化的情况下true代表的是1，false代表的是0，下面我们就来看一看

### 什么是隐式转化

``` bash
<!-- ==是比较运算符的一种 其功能就是转化为同类型进行比较 -->
'1' == 1 //=> true
<!-- +可以进行字符串的连接也可用于数字的相加 -->
1 + '1' //=> '11'
+ '2' //=> 2
'' + 1 //=> '1'
<!-- 对象进行比较永远都是false -->
[] == [] //=> false

<!-- 数组这样比较实际上比较的是alert弹出的值 -->
[] == false //=> true
[0] == false //=> true
[1] == false //=> false
[0,0] == '0,0' //=> true
```
### 真与假
``` bash
<!--隐式转化为 1+1 -->
1 + true //=> 2 
<!-- 隐式转化为 1+0 -->
1 + false //=> 1
<!-- 但true绝对不是1 false也绝对不是0-->
1 == true //=> true
'1' == true //=> true

0 == false //=> true
'0' == false //=> true

1 === true //=> false
0 === false //=> false

```
### 比较运算符中

``` bash
<!-- -1 > -2 return true true > 0 1 > 0 return true -->
-1 > -2 > 0 //=> true


```
