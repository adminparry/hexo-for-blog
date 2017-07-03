---
title: 非utf8编码
---
Unicode是国际组织制定的可以容纳世界上所有文字和符号的字符编码方案，而你接触过的编码实际上都是基于Unicode的一种实现方式，至于为什么要有别的实现方式只是感觉浪费而已，还有一个有意思的事就是Node.JS不支持的字符编码，如GBK，BIG5


### 当nodejs遇见gbk

``` bash
var http = require("http");
var iconv = require("iconv-lite");
var url = "http://hq.sinajs.cn/etag.php?_=1480057172274list=sh600153";

http.request(url, function(res){
	    res.on('data',function(data){
	        data = iconv.decode(data, 'GBK');
	        console.log(data)
	        
	    });
	  
	}).end();
```
当nodejs遇见gbk无非就是个乱码而已，当然生活是艰难的，但还是要生活的，
一个包包iconv-lite来处理这个乱码，话说包治百病，如果爱请深爱，有兴趣的话打开包看一下，像这种转化应该没有什么算法规律可言的，最暴力的方法就是像密码表一样做映。
人家写的专业http://nodejs.lofter.com/post/3c14e_48aee
