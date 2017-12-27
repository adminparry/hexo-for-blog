---
title: js通用树形菜单
---
树形菜单是开发人员经常遇到的设计，包括sql表的设计，以及前端ui设计

## 快速开始

### 创建一个html文件

``` bash
$ touch index.html
```

### box作为树形菜单的容器

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>tree</title>
</head>
<body>
	<button id="open1">全部展开</button><button id="close1">全部收起</button>
	<div id="box"></div>
	
</body>
</html>
```
这里的box作为我们树形菜单的容器
### 编写js文件

``` bash
<script type="text/javascript">
	

//通常意义这样的数据结构提供给我们作为树形菜单的结构
var arr = [
	{name:'技术部',
	child:[
	{name:'前端',child:[]},
	{name:'后台',child:[]}
	]},
	{name:'产品部',child:[]},
	{name:'行政部',child:[
	{name:'执行',child:[{name:'前台',child:[]}]}
	]}
]
	//全部展开
	window.open1.onclick = function(){
		for (var i = 0; i < window.box.children.length; i++) {
			var ul =  window.box.children[i];
			for (var j = 1; j < ul.getElementsByTagName('li').length; j++) {
		
				ul.getElementsByTagName('li')[0].setAttribute('isShow','1')
				ul.getElementsByTagName('li')[j].style.display = 'block';
				ul.getElementsByTagName('li')[j].setAttribute('isShow','1')
			}
			
			
		}
	}
	//全部收起
	window.close1.onclick = function(){

		for (var i = 0; i < window.box.children.length; i++) {
			var ul =  window.box.children[i];
			for (var j = 1; j < ul.getElementsByTagName('li').length; j++) {
				
				ul.getElementsByTagName('li')[0].setAttribute('isShow','0')
				ul.getElementsByTagName('li')[j].style.display = 'none';
				ul.getElementsByTagName('li')[j].setAttribute('isShow','0')
			}
			
			
		}
	
	}
	//初始化我们的tree方法
	tree(document.getElementById('box'),arr);
	//事件委托添加点击事件 当然在这里也可以添加动画特效
	document.getElementById('box').onclick = function(ev){
		var ev = ev || event;
		if(ev.target.className == 'click' && ev.target.nextElementSibling){
			if(ev.target.getAttribute('isShow') == '0'){

				ev.target.setAttribute('isShow','1')
				ev.target.nextElementSibling.style.display = 'block';
				var child = ev.target.nextElementSibling.getElementsByTagName('li');
				for (var i = 0; i < child.length; i++) {
					child[i].style.display = 'block';
					child[i].setAttribute('isShow','1');
				}
			}else{

				ev.target.setAttribute('isShow','0')
				ev.target.nextElementSibling.style.display = 'none';
				var child = ev.target.nextElementSibling.getElementsByTagName('li');
				for (var i = 0; i < child.length; i++) {
					child[i].style.display = 'none';
					child[i].setAttribute('isShow','0');
				}
			}
		}
	}
	//采用递归的方式来创建html结构 因为数据的维度不是固定的
	function tree(ele,data){
		if(data.length){
			for (var i = 0; i < data.length; i++) {
				//创建每个数据单例
				var ul = document.createElement('ul');
				var li = document.createElement('li');

				li.className = 'click';
				li.innerHTML = data[i].name;

				ul.appendChild(li);
				ele.appendChild(ul);
				
				if(data[i].child.length){
					//为了方便控制子集单例放到一个容器里
					var nextLi = document.createElement('li');
					ul.appendChild(nextLi);
					tree(nextLi,data[i].child)
				}
			}
		}
	}
</script>
```

