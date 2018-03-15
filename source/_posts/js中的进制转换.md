---
title: js中的进制转换
---
二进制 八进制 十进制 十六进制 最为常用
支持 2 and 36进制之间的转换

二进制主要用于电子计算器 运算简单 因为二进制的加法表和乘法表是最简单的 这样就会使计算机的运算器小一些
易于实现电子元件只有通和断两种不同的状态正好跟二进制的1和0 对应
节约设备例如在十进制表示小于1000的正整数 需要3个数位 每个数位10个元件 一共3 x 10 = 30
2的10次幂是1024 在二进制中表示小于1024 的所有整数需要10个数位 每个数位2个元件 一共2 x 10 = 20 

### toString

``` bash
<script type="text/javascript">
	var num = 10086;
	console.log(num.toString(2))//10011101100110
 
</script>
```
### parseInt

``` bash
<script type="text/javascript">
	var num = 10011101100110;
	// 第二个参数为解析为多少进制 
	console.log(parseInt(num,2))//10086
 
</script>
```
### Math.pow
``` bash
<script type="text/javascript">
	
	function convert(wanna,alis){
		alis = Math.floor(alis);//转换成整数和识别十六进制数
		if( 2 >= alis || alis <= 36){
			var ret = 0;
			var arr = wanna.toString().split('').reverse().join('');

			for (var i = 0; i < arr.length; i++) {
				ret += Math.floor(arr[i]) * Math.pow(alis,i);
			}
			return ret;
		}else{
			return NaN;
		}
	}
	var ret = convert(10011101100110,2);
	console.log(ret)//10086
</script>
```