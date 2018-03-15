---
title: eventLoop
---
JavaScript 的任务模型

### 单线程
JavaScript是单线程的 负责解释和执行代码的线程只有一个
但往往会处理一些异步任务
是eventLoop让js有的异步处理能力


### 同步在前异步在后
``` bash
<script type="text/javascript">
	setTimeout(function(){
		console.log(2)
	},0)
	console.log(1)
	//1,2
</script>
```

### 事件循环
主线程运行同步任务后依次执行异步任务


![eventLoop](/blog/images/eventLoop/1.png)

### Node.js的Event Loop
https://github.com/nodejs/node/blob/v6.x/doc/topics/event-loop-timers-and-nexttick.md


