---
title: js之闭包（Closure)
---
闭包这个问题从js出生的那天起就开始说起，至今为止够快变成必问的话题，闭包说起来就是作用域链的问题，先看定义：子函数使用父函数的局部变量。其子函数包含父函数的引用关系所以函数被调用的时候其引用关系并没有得到释放，所以就构成的叫做闭包，那我们说闭包是不好的是没有得到释放，当然有好多场景是必要的，利用不释放，所以保留了生命周期  


### 闭包例子

``` bash
function a(){
    var i=0;

    function b(){
        alert(++i);
    }
    return b;
}
var c=a();
c();
```
### 使用闭包的场景
``` bash
//要求实现一个add方法其返回所有参数的和例如 add(1)(2)(3)(4) =>10
function add(num){
        // 闭包
        var total = num;

        function sum(num2){
            total += num2;
            return sum;
        }
        sum.toString = function(){
            return total;
        }
        return sum;//function

    }

alert(add(1)(2)(3))

```