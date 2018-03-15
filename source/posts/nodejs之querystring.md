---
title: nodejs之querystring
---
http模块作为node的内置模块，可以为我们快速创建http服务


### start
``` bash
$ touch server.js
```
### 一目了然的示例
``` bash
<script type="text/javascript">
	var http = require('http');
	var url=require('url');
	var qs=require('querystring');

	var sql = require('./sql');
	//查询总条数
	function count(table_name){
		let sqlStr = `SELECT COUNT(*) AS ? FROM ${table_name}`;
		return new Promise((resolve,reject)=>{
			sql.query(sqlStr,['count'],(err,result)=>{
				
				if(err){
					reject(err);
					throw err;
				}else{
					
					resolve(result);
				}
			})
		})
	}
	//limit进行分页
	function limit(table_name,pn,ps){

		let sqlStr = `SELECT * FROM ${table_name} LIMIT ?,?`;
		return new Promise(function(resolve,reject){
			
			sql.query(sqlStr,[+pn,+ps],(err,result)=>{
				if(err){
					reject(err);
					throw err;
				}else{
					resolve(result);
				}
				
			})
		
		})
	}
	function Application(port){
		var self = this;
		this.UrlSet = [];

		this.http = http.createServer((req,res)=>{
			if(req.url == '/favicon.ico'){
				res.end('favicon');
				return;
			}else{
				var routerStr = url.parse(req.url,true).pathname;
				
				var i = -1;
				
				while(i++ < self.UrlSet.length - 1 ){
					
				
					if(self.UrlSet[i].url == routerStr){

						self.UrlSet[i].fn.call(self,req,res);
					}else{
						res.end('404');
					}
				}
			}

		}).listen(port)
	} 
	Application.prototype.get = function get(url,callback){
		this.UrlSet.push({url:url,fn:callback});
	}

	var app = new Application(8888);


		
	app.get('/pager',function(req,res){

		var arg = url.parse(req.url).query;
	 	var obj = qs.parse(arg);

	 	const {pageNum,pageSize} = obj;
	 	//表名称
	 	let table_name = '_pager';

	 	pageNum = isNaN(pageNum) ? 0 : pageNum;
	 	pageNum = isNaN(pageSize) ? 0 : pageSize;


	 	Promise.all([count(table_name),limit(table_name,pageNum,pageSize)]).then((arg)=>{
	 		var result = Object.create(null);
	 		result.count = arg[0][0].count;
	 		result.data = arg[1];

	 		res.end(JSON.stringify(result));

	 	}).catch((err)=>{
	 		res.end(err);
	 	})
	})

</script>
```
### sql.js
``` bash
$ npm install mysql
```
``` bash
<script type="text/javascript">
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'',
		password:'',
		database:'test'
	})

	connection.connect();

	module.exports = connection;

</script>
```
