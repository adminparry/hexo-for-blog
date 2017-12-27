---
title: web日历组件
---
日历组件是一些网站必备的小东西，例如旅游网站要选择行程时间，购票网站乘车时间，日历组件千万种jquery的react的angular的等等，那么如何按照设计或者产品的要求来编写日历呢，have a look!


### Date

``` bash
<script type="text/javascript">
	// 获取当前时间
	var currentDate = new Date();
	// 时间戳
	var unixDate = currentDate.getTime();
	// 年月日周时分秒
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	var week = currentDate.getDay();
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
</script>
```
### 获取某月有多少天

``` bash
<script type="text/javascript">
	
	
	
	function getDays(month, year){
		// 获取当前时间
		var currentDate = new Date();
		currentDate.setFullYear(year || currentDate.getFullYear())
		currentDate.setMonth(+month);
		currentDate.setDate(0);
		return currentDate.getDate();
	}
</script>
```
### 规定每月的日历行
``` bash
<script type="text/javascript">
	// windows的日历为 6 行 以下为参考windows日历样式
	// 获取第一天为周几 让出一周为上个月的时间
	var currentMonth = [];
	var currentLength = 6 * 7;

	var prevMonth = [];
	var prevLength = 0;

	var nextMonth = [];
	var nextLength = 0;
	// 获取某月的第一天为周几
	function firstDayWeek(month,year){
		var currentDate = new Date();
		currentDate.setFullYear(+year || currentDate.getFullYear());
		currentDate.setMonth(month - 1);
		currentDate.setDate(1);
		return currentDate.getDay();
	}

	function insertCurrent(month,year){
		var d = 0;
		for (var i = 0; i < getDays(month,year); i++) {
			d = currentMonth.push(`<div class="cur">${i}</div>`);

		}
		return d;
	}
	function insertPrev(month,year){
		var d = 0;
		var count = firstDayWeek(month,year);
		count == 0 ? 7 : count;

		for (var i = 0; i < count; i++) {
			d = prevMonth.push(`<div class="prev">${i}</div>`);

		}	
		return d;
	}
	var a = insertCurrent(month,year) + insertPrev(month,year);
	var b = length - a;
	function insertNext(){
		var d = 0;
		for (var i = 1; i < b; i++) {
			d = nextMonth.push(`<div class="next">${i}</div>`);
		}	
		return d;
	}
	
	nextLength = insertNext();

	var result = prevMonth.concat(currentMonth).concat(nextMonth);

</script>
```
### 规定为这个时间范围

``` bash
<script type="text/javascript">
	// 1970年之后 
</script>
```  