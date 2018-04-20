---
title: nodejs之cheerio
---
node非自带模块cheerio所实现的功能是提供了一个浏览器的标签解析方案，而内置的是一个小的jquery方法，实际的意义就是采集源码

具体api访问地址：https://www.npmjs.com/package/cheerio

### start
``` bash
$ npm install cheerio
$ touch cheerio.js
```
### 一目了然的示例
``` bash
<script type="text/javascript">
	var cheerio = require('cheerio');


	const $ = cheerio.load('<h2 class="title">Hello world</h2>')
	 
	$('h2.title').text('Hello there!')
	$('h2').addClass('welcome')

	 console.log($.html())

</script>
```
### 
``` bash
<script>
	
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%BB%86&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%BB%86&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&pn=60&rn=30&gsm=3c&1519390513008=';

const $ = cheerio.load('<h2 class="title">Hello world</h2>');

const dir = './__images__';

fs.mkdir(dir, 0777, function(err){
 if(err){
  console.log(err);
 }else{
  console.log("creat done!");
  execute();
 }
})

function execute(){
	var download = function(url, dir, filename){
		request.head(url, function(err, res, body){
			request(url).pipe(fs.createWriteStream(dir + "/" + filename));
		});
	};

	request(url,function(err,res,body){
		if(err) throw err;
		var body = res.body;
		var data = JSON.parse(body).data;
		var i = 0;

		while( ++i < data.length -1 ){

			console.log(data[i].middleURL);
			var src = data[i].middleURL;

			download(src, dir, new Date().getTime().toString(32) + src.substr(-4,4));
		}
	})
}




</script>
```