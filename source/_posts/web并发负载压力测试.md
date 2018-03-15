---
title: web并发负载压力测试
---

[http://httpd.apache.org/download.cgi]

### Apache ab

![ab](/blog/images/apache/ab.png)
![ab](/blog/images/apache/ab2.png)
![ab](/blog/images/apache/ab3.png)

### 参数
ab -n 800 -c 800  http://192.168.0.10/ 
（-n发出800个请求，-c模拟800并发，相当800人同时访问，后面是测试url）

ab -t 60 -c 100 http://192.168.0.10/ 
在60秒内发请求，一次100个请求。 
  
//如果需要在url中带参数，这样做 
ab -t 60 -c 100 -T "text/plain" -p p.txt http://192.168.0.10/hello.html 
p.txt 是和ab.exe在一个目录 
p.txt 中可以写参数，如  p=wdp&fq=78 

![ab](/blog/images/apache/ab_param.jpg)
![ab](/blog/images/apache/ab_param2.jpg)
