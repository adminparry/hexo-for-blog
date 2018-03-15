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
