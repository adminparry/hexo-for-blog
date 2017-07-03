---
title: jsonp说跨域
---
跨域这个话题很“那个”以至于大多数人都用来那他来开话匣子，跨域获取数据好像并不常用，但却被人常常说起，那就来说说跨域这件小事

### 比较常用的jsonp

``` bash
	var interface = 'http://suggestion.baidu.com/su?wd=abc&cb=back';
	var script = document.createElement('script');
		script.src = interface;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
	function back(data){
		alert(data.s)
	}

```
这里采用的原理是html标签src属性可以拉取到外部资源，利用这个特性我们可以把数据放在函数调用的参数里面进行传递，当然数据格式需要是函数调用的格式
这里找了个百度的搜索关键词接口

### 顺便写下jquery的jsonp形式

``` bash
<!-- http://code.jquery.com/jquery-1.9.1.min.js -->
$.ajax({
		url:'http://suggestion.baidu.com/su',
		dataType: "jsonp",
		jsonp:'cb',
		data:{
			wd:'11'
		},
		success:function(data){
			alert(data.s)
		}
	})
```
这里的jsonp接受的为函数名字的key

### 比较常用的权限控制

``` bash
<!-- 设置响应头 -->
<!-- 这里就来个express的实例吧 -->
var express = require('express');
var app = express();

app.get('/test', function (req, res) {
	<!-- 这里我们只允许http://127.0.0.1:8080 如果完全开放可用* -->
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
	
  res.send('hello');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

```
当然方法有很多种，只不过在这里我觉得是比较经典的东西所以记录下来