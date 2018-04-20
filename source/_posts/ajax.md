---
title: ajax
---
追溯到最早的数据交互模式是form表单提交，而form只是单向的向后台传输数据，而ajax却是双向的，ajax  这个被称作为异步的JavaScript和xml确实不太好听，xml这个数据结构在早年间一直被我定义为王者的，但后来前端数据交互的格式大部分都为json，浏览器赋予JavaScript的请求能力

### xhr

``` bash
<script type="text/javascript">
	<!-- 非ie家 -->
	var xhr = new XMLHttpRequest();
	<!-- ie家 -->
	var xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
</script>

```
这是提供给我们最原始的请求对象

### get

``` bash
<script type="text/javascript">
	
<!-- 接口地址 -->
var url = 'http://127.0.0.1/test';
var xhr = new XMLHttpRequest();
<!-- 打开方式 地址 是否异步 -->
xhr.open('GET', url ,true);
xhr.send();
xhr.onreadystatechange = function(){
	<!-- 准备状态为4的时候为准备就绪 -->
	if(this.readyState == 4){
		<!-- 判断网络传输的状态码 -->
		var status = this.status;
		<!-- 一般来说成功的状态 -->
		var isSuccess = status >= 200 && status < 300 || status === 304
		if(isSuccess){
			<!--  成功后一般我们都对应返回成功文本-->
			alert(this.response)
		}
	}	
}
</script>
```
get传递参数的时候是问号后面添加数据数据格式是?a=1&b=2 ...

### post

``` bash
<script type="text/javascript">
	
<!-- post同理 -->
var url = 'http://127.0.0.1/test';
var xhr = new XMLHttpRequest();
xhr.open('POST', url ,true);
<!-- 只不过多了个设置请求头 -->
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send('detail=描述');
xhr.onreadystatechange = function(){
	if(this.readyState == 4){
		var status = this.status;
		var isSuccess = status >= 200 && status < 300 || status === 304
		if(isSuccess){
			alert(this.response)
		}
	}	
}
</script>
```
而post传递参数格式也是如此 不过是放在send里


### 响应类型

responseType
""	DOMString (this is the default value)
"arraybuffer"	ArrayBuffer
"blob"	Blob
"document"	Document
"json"	JavaScript object, parsed from a JSON string returned by the server
"text"	DOMString
``` bash
<script type="text/javascript">
	var url = 'http://127.0.0.1/test';
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url ,true);
	/*如果不进行设置默认是DOMString*/
	xhr.responseType = 'blob';
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('detail=描述');
	xhr.onreadystatechange = function(){
		if(this.readyState == 4){
			var status = this.status;
			var isSuccess = status >= 200 && status < 300 || status === 304
			if(isSuccess){
				alert(this.response)
			}
		}	
	}
</script>
```
