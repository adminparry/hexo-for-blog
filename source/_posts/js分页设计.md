---
title: js分页设计.bak
---

## Quick Start

### 瀑布流分页

js瀑布流效果，当网页为展示无数图片，或者无数文章时，如果首次不进行分批传输的话，页面很容易被数量过多的元素及资源所憋脚，这个时候采用瀑布流的形式比较合理，原理为用户所显示的内容为准，只在用户所浏览的多少而给予多少资源	

``` bash
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
	var scrollBottom=document.documentElement.clientHeight+scrollT;
	
	document.title=scrollBottom+'| '+document.body.scrollHeight;
	if(scrollBottom>=document.body.scrollHeight){
		<!-- todo -->
	}	
}

```



### 页码分页

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div id="page"></div>
</body>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
	
	function Pager(parent, fn){
		this.parent = parent;
		this.fn = fn;
		this.firstVilid();
	}
	Pager.prototype = {
		constructor:Pager,
		currentPageNum:100,
		pageSize:10,
		pageLength:5,
		pageList:[],
		middle:function(){
			return Math.ceil(this.pageLength / 2)
		},
		createPageList:function(){
			// for (var i = this.currentPageNum; i <= this.pageLength; i++) {
			// 	this.pageList.push(i);
			// }
			var evenOrodd = this.pageLength % 2;
			
			this.pageList = [];


			var middle = this.middle();

			// if(this.currentPageNum >= middle){
				var i = 0;
				
				this.pageList.push(this.currentPageNum);
				

					
				while( ++i < middle){
					
					this.pageList.unshift(this.currentPageNum - i);
					this.pageList.push(this.currentPageNum + i);
					
				}

				if(!!evenOrodd){
					
					// this.pageList.push(this.currentPageNum + middle);
				}else{
					this.pageList.unshift(this.currentPageNum - middle);
				}
			// }else{
				// for (var i = 1; i <= this.pageLength; i++) {
					// this.pageList.push(i);
				// }
			// }
			console.log(this.pageList,this.currentPageNum)
		},
		firstVilid:function(pageNo){

			var self = this;
			var pageNo = pageNo || self.currentPageNum;
			this.xhr({
				pageNo:pageNo,
				pageSize:self.pageSize
			},function(res){
				self.fn(res);
				// 获取一共有多少页
				var totalPage = Math.ceil(res.totalCount/ self.pageSize);
			
				if(self.pageLength <= 2 ){
					// 在这里可以添加上一页下一页 因为所必要的触发条件
					console.log('无法进行触发下一页和上一页');
					self.pageLength = 3;
				}

				if(pageNo >= totalPage){
					// 服务器数据有更新
					pageNo = totalPage > 0 ? totalPage : 1;
				}
				// 如果当前生成页码数大于总页码数
				// 初始化的页码数
				if(totalPage <= self.pageLength){

					self.lowerpageList(totalPage);
					self.createPageElement(pageNo)
				}else{
					// 尾页的处理

					if( pageNo > totalPage - self.pageLength + 1 ){

						self.lowerpageList(totalPage,totalPage - self.pageLength + 1);
						self.createPageElement(pageNo)
					}else if(pageNo < self.middle() + 1){

						self.lowerpageList(self.pageLength);
						self.createPageElement(pageNo)
					}else{
						self.createPageList(pageNo);
						self.createPageElement(pageNo)
					}
				}
				

				
			})
		},
		prev:function(){

		},
		next:function(){

		},
	
		lowerpageList:function(total,end){
			var i = end || 1;

			this.pageList = [];
			for ( ;i <= total; i++) {
				this.pageList.push(i)
			}

		},
		createPageElement:function(pageNo){
			var self = this;
		
				var box = document.createElement('div');

				for (var i = 0; i < self.pageList.length; i++) {
					var span = document.createElement('span');
					span.title = span.innerHTML = self.pageList[i];
					
					span.onclick = function(){
						
						var pageNo = Number(this.innerHTML);
						self.currentPageNum = pageNo;
						self.firstVilid(pageNo)
					}
					if(pageNo == self.pageList[i]){
						span.style.background = 'red';
						span.onclick = null;
					}
					box.appendChild(span);
				}
				this.parent.innerHTML = null;
				this.parent.appendChild(box);

		
		},
	
		xhr:function(data,callback){
			var result = $.ajax({
				url:'https://www.yinchengmall.com/f/loan/list.do',
				type:'post',
				dataType:'json',
				data:data,
				success:function(res){
					res = res.body;
					callback(res)
				}
			})
			console.log(result)
		}
	}
	var pager = new Pager(document.querySelector('#page'),function(data){
		console.log(data)
	});


</script>
</html>
```
