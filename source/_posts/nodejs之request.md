---
title: nodejs之request
---
request非node自带模块需要到npm镜像中进行安装，该模块的作用实现了http及https的请求，可以利用该功能实现开发日常的需求，例如代理一个服务给自己的服务所用，还可以采集一些数据，文本 图片等，使得拥有资源成为一个简单而又轻松的一件事

具体api访问地址：https://www.npmjs.com/package/request

### start
``` bash
$ npm install request
$ touch request.js
```
### 一目了然的示例
``` bash
<script type="text/javascript">
	var request = require('request');
	request('http://www.google.com', function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	});
</script>
```
### 数据采集示例
采集一个分页的接口 把数据保存在本地数据库
``` bash
<script type="text/javascript">
	var request = require('request');
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'',
		password:'',
		database:'test'
	})
	var url = 'https://www.yinchengmall.com/bus/pc/loan/list/f/business/type/0?pageSize=1000';

	request(url,function(err,res,body){
		if(err)throw err;

		connection.connect();
		
		
		
		var json = JSON.parse(res.body).body;
		var total = json.totalCount;
		var pager = '_pager';

		var arr = json.result[0];
		var column = Object.keys(arr);

		function generatorColumn (column){
			return column.map((item,index)=> { return item += ' varchar(255)' }).join(',\r\n')
		}
		function generatorRow(row){
			var ret = [];

			for (var key in arr) {
				ret.push("'" + row[key] + "'"); 
			}
			return ret.join(',\r\n');
		}
		var create  = `CREATE TABLE ${pager}(
							${generatorColumn(column)}
						)`;

		connection.query('select count(1) from sys.objects where name = ?',pager,function(err){
			if(!err){
				connection.query(create,err => { if(err)throw err });
			}
		})
		

		var i = 0;

		while(i++ < json.result.length - 1){

			var INSERT = `INSERT INTO ${pager} VALUES(${generatorRow(json.result[i])})`;
			connection.query(INSERT,err => { if(err)throw err });
		}

	})
</script>
```
### 图片采集示例
``` bash
<script type="text/javascript">
	
	var fs = require('fs');
	var request = require("request");

	var url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%BB%86&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%BB%86&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&pn=60&rn=30&gsm=3c&1519390513008=';


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
 
