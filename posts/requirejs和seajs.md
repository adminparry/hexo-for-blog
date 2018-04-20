---
title: requirejs和seajs
---
AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMDCMD 规范在这里：https://github.com/seajs/seajs/issues/242AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。还有不少⋯⋯这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。目前这些规范的实现都能达成浏览器端模块化开发的目的。区别：
1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）

CMD 推崇依赖就近，AMD 推崇依赖前置
### 箭头函数
``` bash

```
### CMD

``` bash
<script type="text/javascript">
	define(function(require, exports, module) {  
	 var a = require('./a');
	    a.doSomething()   // 此处略去 100 行 
	 var b = require('./b') // 依赖可以就近书写   b.doSomething()   // ... 
	})

</script> 
```

### AMD 

``` bash
<script type="text/javascript">
	define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好
	    a.doSomething()
	    // 此处略去 100 行
	    b.doSomething()
	    ...
	}) 
</script>
```
方案 | 优势 | 劣势 | 特点
=== | === | === | ===
AMD | 速度快 | 会浪费资源 | 预先加载所有的依赖，直到使用的时候才执行
=== | === | === | ===
CMD | 只有真正需要才加载依赖 | 性能较差 | 直到使用的时候才定义依赖
=== | === | === | ===

