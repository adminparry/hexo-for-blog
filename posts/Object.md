---
title: Object
---

方法

### Object.assign

Object.assign(target, ...sources)

合并对象 返回合并后的结果

只会合并可以枚举的属性

``` bash
<script type="text/javascript">
	var obj = { a: 1 };
	var copy = Object.assign({}, obj);
	console.log(copy); // { a: 1 }
</script>
```

如果参数中有相同的键 后来的参数中的键会覆盖之前的参数中的键
``` bash
<script type="text/javascript">
	var o1 = { a: 1, b: 1, c: 1 };
	var o2 = { b: 2, c: 2 };
	var o3 = { c: 3 };

	var obj = Object.assign({}, o1, o2, o3);
	console.log(obj); // { a: 1, b: 2, c: 3 }
</script>
```


### Object.create


向下兼容

``` bash
<script type="text/javascript">
	if (typeof Object.create !== "function") {
	    Object.create = function (proto, propertiesObject) {
	        if (typeof proto !== 'object' && typeof proto !== 'function') {
	            throw new TypeError('Object prototype may only be an Object: ' + proto);
	        } else if (proto === null) {
	            throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
	        }

	        if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

	        function F() {}
	        F.prototype = proto;

	        return new F();
	    };
	}
</script>
```

Object.create(proto, [propertiesObject])



![eventLoop](/blog/images/eventLoop/1.png)

### Node.js的Event Loop
https://github.com/nodejs/node/blob/v6.x/doc/topics/event-loop-timers-and-nexttick.md


