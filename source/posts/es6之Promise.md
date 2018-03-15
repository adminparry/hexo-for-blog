---
title: es6之Promise
---


### 学习检测
``` bash
<script type="text/javascript">
	const promise = new Promise((resolve,reject)=>{
		console.log(1);
		resolve();
		console.log(2)
	})
	promise.then(()=>{
		console.log(3);
	})
	console.log(4)
</script>
```
执行结果 为 1 2 4 3
promise.then中的函数是异步执行的 构造函数中的函数是同步执行的

``` bash
<script type="text/javascript">
	const promise1 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('success');
		},1000)
	})
	const promise2 = promise1.then(()=>{
		throw new Error('error');
	})
	console.log(1,promise1);
	console.log(2,promise2);
	setTimeout(()=>{
		console.log(3,promise1);
		console.log(4,promise2);
	},2000)
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
