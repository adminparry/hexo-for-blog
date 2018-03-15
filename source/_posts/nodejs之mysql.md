---
title: nodejs之mysql
---
## start

``` bash

npm install mysql

touch mysql.js

```
### createConnection
创建连接对象
``` bash
<script type="text/javascript">
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'',
		password:'',
		database:'test'
	})
	
</script>
```
### connect
建立连接 打开连接
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
	
</script>
```
### query
执行sql语句
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
	let c,u,r,d;
	let t_n = 'user';

	c = `select * from ${t_n}`;
	u = `INSERT INTO ${t_n} VALUES(?,?,?,?,?,0)`;
	r = `UPDATE ${t_n} SET name = ?,age = ? WHERE name = ?`;
	d = `DELETE FROM ${t_n} WHERE age = ?`;

	function result(err, result){
		if(err) throw err;
		console.log(result)
	}
	connection.query(c,result);

	connection.query(u,[1,2,3,4,5],result);

	connection.query(r,[1,2,1],result);

	connection.query(d,2,result);
</script>
```
### 
关闭连接
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
	let c,u,r,d;
	let t_n = 'user';

	c = `select * from ${t_n}`;
	u = `INSERT INTO ${t_n} VALUES(?,?,?,?,?,0)`;
	r = `UPDATE ${t_n} SET name = ?,age = ? WHERE name = ?`;
	d = `DELETE FROM ${t_n} WHERE age = ?`;

	function result(err, result){
		if(err) throw err;
		console.log(result)
	}
	connection.query(c,result);

	connection.query(u,[1,2,3,4,5],result);

	connection.query(r,[1,2,1],result);

	connection.query(d,2,result);

	connection.end();
</script>
```