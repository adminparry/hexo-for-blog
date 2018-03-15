---
title: js中的instanceof
---
instanceof 是js中的操作符，instance翻译成中文的意思是实例，of在英文中通常都是指所属，那作者的初衷是实例的所属者，
例如：1 instanceof Number 为false ；而new Number(1) instanceof Number 为true

## 快速开始

### instanceof

``` bash
<script type="text/javascript">
	function instance(obj, constructor){
		// 这里的判断条件就不写了
		// ...
		var proto = obj.__proto__;
		
		while(proto){
			if(proto == constructor.prototype){
				return true;
			}
			proto = proto.__proto__;
		}
		return false;
	}
	<!-- 写个测试用例 -->
	console.log(instance(new Array,Function))//false
	console.log(new Array instanceof Function)//false
</script>

```
实际上来说instanceof就是查找原型，找到返回true找不到返回false，
在这里需要说的是instanceof前面要是个对象后面要是个构造函数，不然就会报错

