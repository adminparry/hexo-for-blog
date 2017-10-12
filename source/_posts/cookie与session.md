---
title: cookie与session
---
开始接触cookie与session的时候大部分人都有这种感觉，cookie和session是有关系的，而不知道两者具体是什么关系，cookie是储存在用户本地终端上的数据，而session是储存在服务器上的数据，两者的关系是一一映射的套接对应关系,单个cookie在客户端的限制是3K左右，而往往服务端session都默认保存在内存当中，

## JavaScript操作Cookie
cookie的类型[object String]
![cookie-session](/blog/images/cookie&session/o_Cookie_Session001.png)

### 设置cookie
``` bash
	document.cookie="username=John Doe";
```
### 获取cookie
``` bash
	document.cookie="username=John Doe";
```

###  cookie可以添加过期时间
``` bash
	document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";
```

###  path 参数告诉浏览器 cookie 的路径，默认情况下，cookie 属于当前页面。

``` bash
	document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
```

### 实例
``` bash

function addCookie(name,value,iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';path=/;expires='+oDate;	
}

function getCookie(name){
	var arr=document.cookie.split('; ');
	
	for(var i=0; i<arr.length; i++){
		var arr2=arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];	
		}
	}
	return '';
}

function delCookie(name){
	addCookie(name,'1',-1);
}

```