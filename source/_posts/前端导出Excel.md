---
title: 前端导出Excel
---
对于目前的前端而言做的事情可能是越来越多了，以前后台做的事情现在都移到前端来做，也就是说以后的以后前端所能做的事情就越来越多了，浏览器也给前端的权限是越来越多，这无疑是个好事，人么总是从贫穷到富有的，下面就介绍几种前端导出Excel的几种方式

### 利用a标签

在主流的浏览器chrome Firefox等浏览器下这种方法无疑是最便捷的操作方法
``` bash

var str = "博客, 域名\nBlog, 2\njb51.net, 3";
var uri = 'data:text/csv;charset=utf-8,' + str;
var downloadLink = document.createElement("a");
downloadLink.href = uri;
downloadLink.download = "export.csv";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);

```

### 利用blob对象

``` bash

``` 




