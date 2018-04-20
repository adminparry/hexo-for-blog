---
title: EventEmitter
---

动态规划(dynamic programming)是运筹学的一个分支，是求解决策过程(decision process)最优化的数学方法。20世纪50年代初美国数学家R.E.Bellman等人在研究多阶段决策过程(multistep decision process)的优化问题时，提出了著名的最优化原理(principle of optimality)，把多阶段过程转化为一系列单阶段问题，利用各阶段之间的关系，逐个求解，创立了解决这类过程优化问题的新方法——动态规划。1957年出版了他的名著《Dynamic Programming》，这是该领域的第一本著作。

### N个阶梯，你一次可以上一阶或两阶，走上去，共有多少种走法
``` bash
<script type="text/javascript">
	function func(n){
		if(n < 1)return 0;
		switch(n){
			case 1:return 1;
			break;
			case 2:return 2;
			break;
			default:
			return func(n - 1) + func(n - 2)
		}

	}
	console.log(func(20))
</script>
```
### 斐波那契数列

.第一个月有一对刚诞生的兔子；

.第二个月后可生育；

.每月每对可生育的兔子会诞生下一对新兔子；

.假设兔子永不死去。

``` bash
<script type="text/javascript">
	function fb(n){
		
		if(n < 1)return 0
		switch(n){
			case 1:return 1;
			break;
			case 2:return 1;
			break;
			default:
			return fb(n - 1) + fb(n - 2)
		}
	}
</script> 
```