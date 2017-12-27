---
title: js之事件
---
js这门函数式编程的语言，我觉得最核心的就是事件句柄，另外一部分是数据交互，当然事件是不可缺少的，你可以想一想如果你在写js的时候没有了事件将会是一个什么样的情形，基本上是可以放弃这门语言了，对于大多数前端开发者而言，无论你是刚刚入门的，还是你做了几年的老油条，或者你善于归纳，但你也不见得知道所有的事件


### 鼠标事件

点击 click
双击 dblclick
鼠标按键被按下 mousedown
鼠标被移动 mousemove
鼠标从某元素移开 mouseout
鼠标被移到某元素之上 mouseover
某个鼠标按键被松开 mouseup
右键菜单 contextmenu
鼠标指针移动到元素上时触发 mouseenter
鼠标指针移出元素时触发 mouseleave
鼠标滚轮事件 wheel

### 剪贴板事件

拷贝元素内容时触发 copy
剪切元素内容时触发 cut
粘贴元素内容时触发 paste

### 键盘事件

键按下 keydown
键抬起 keyup
键按住 keypress

### 框架/对象（Frame/Object）事件

图像加载被中断 abort
页面或图像被完成加载 load
用户退出页面 unload
即将离开页面（刷新或关闭）时触发 beforeunload
当前 URL 的锚部分发生修改时触发 hashchange
访问页面时触发 pageshow
离开当前网页跳转到另外一个页面时触发 pagehide
窗口或框架被调整尺寸 resize
文档滚动时发生的事件 scroll
文档或图像错误 error



### 表单事件

失去焦点 blur
获得焦点 focus
即将获取焦点时触发 focusin
即将失去焦点时触发 focusout
用户输入时触发 input
搜索域输入文本时触发 ( input="search") search
改变域的内容 change
提交按钮被点击 submit
重置按钮被点击 reset
文本被选定 select

### 打印事件

该事件在页面已经开始打印，或者打印窗口已经关闭时触发 afterprint
该事件在页面即将开始打印时触发 beforeprint

### 拖动事件

该事件在元素正在拖动时触发 drag
该事件在用户完成元素的拖动时触发 dragend
该事件在拖动的元素进入放置目标时触发 dragenter
该事件在拖动元素离开放置目标时触发 dragleave
该事件在拖动元素在放置目标上时触发 dargover
该事件在用户开始拖动元素时触发 dargstart
事件在拖动元素放置在目标区域时触发 ondrop

### 多媒体（Media）事件



### 其他

该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发 message
该事件在浏览器开始在线工作时触发 line
该事件在浏览器开始离线工作时触发 offline
该事件在窗口的浏览历史（history 对象）发生改变时触发 popstate
该事件当 menu 元素在上下文菜单显示时触发 show
该事件在 Web Storage(HTML 5 Web 存储)更新时触发 storage
该事件在用户打开或关闭 details 元素时触发 toggle
切换标签 visibilitychange <details>
``` bash
var json = {
activateHtml5SoundsBrowserVisible: function() {
        var visibilityChange = "";
        if(window.document.hidden != null) {
            this.hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if(document.mozHidden != "undefined") {
            this.hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
        } else if(document.msHidden != "undefined") {
            this.hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if(document.webkitHidden != "undefined") {
            this.hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        window.document.addEventListener(visibilityChange,$bind(this,this.handleVisibilityChange),false);
    }
    ,handleVisibilityChange: function() {
        haxe_Log.trace(document[this.hidden],{ fileName : "Config.hx", lineNumber : 156, className : "Config", methodName : "handleVisibilityChange"});
        if(document[this.hidden]) window.Howler.mute(true); else window.Howler.mute(false);
    }
}
```
### 动画事件

该事件在 CSS 动画结束播放时触发 animationend
该事件在 CSS 动画重复播放时触发 animationiteration
该事件在 CSS 动画开始播放时触发 animationstart

### 过渡事件

CSS 完成过渡后触发 transitionend

### 事件绑定
1.事件绑定可以标签上绑定 这也是最早处理事件的方式
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		function btnClick(curElement){
			alert(curElement)
		}
	</script>
</head>
<body>
<button onclick="btnClick(this)"></button>
</body>
</html>

```
2.DOM0事件绑定可以在属性赋值 这也是最方便的处理方式
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		window.onload = function(){
			var btn = document.getElementById('btn');
			btn.onclick = function(){
				alert(9)
			}
		}
	</script>
</head>
<body>
<button id="btn">按钮</button>
</body>
</html>

```
3.DOM2事件绑定可以在指定函数中进行 这也是最常见的处理方式,其中第三个参数为是否进行捕获
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		function addEvent(ele,type,isCapture,fn){
			/*主流浏览器*/
			if('addEventListener' in window){
				ele.addEventListener(type, function(){
					fn(arguments);
				},isCapture)
			}
			/*IE浏览器*/
			else if('attachEvent' in window){
				ele.attachEvent('on' + type, function(){
					fn(arguments);
				})
			}
		}
		function removeEvent(type, fn, isCapture){
			if('removeEventListener' in window){
				ele.removeEventListener(type, fn, isCapture)
			}else if('detachEvent' in window){
				ele.detachEvent('on' + type, fn)
			}
		}
	
		addEvent(window,'load',false,function(){
			var btn = document.getElementById('btn');
			function btnClick (){

				alert(999)
			
			}
			addEvent(btn, 'click',false,"btnClick")
			removeEvent(btn,"btnClick",false)
		})

	</script>
</head>
<body>
<button id="btn">按钮</button>
</body>
</html>

```
### 事件对象
事件对象是事件触发时返回给你的该事件的详细信息，有的时候我们会利用这些信息进行相应的处理
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div id="box"></div>
</body>
<script type="text/javascript">
	document.onmousedown = function(ev){
		//ie
		var oEvent = ev || window.event;
		alert(oEvent)//=> clientX cancelBubble pageX ...
	}
	function foo(ev){
		console.log(ev)

	}
	document.addEventListener('mousemove',foo,false)
</script>
</html>
```
### 事件触发器

### 事件委托
事件委托实际上就是利用了事件冒泡 因为事件要向上传播 所以我们利用相反的道理 我们把最终的父级绑定事件再判断父级下的哪些元素需要触发这个事件

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		#__parent__{
			display: flex;
			flex-direction: row;
			width:100%;height:100%;
		}
		#__parent__ .child{
			width: 200px;height: 200px;margin:10px;
			text-align: center;line-height: 200px;
			background: red;cursor: pointer;
		}
	</style>
</head>
<body>
	<div id="__parent__">
		<div class="child">1</div>
		<div class="child">2</div>
		<div class="child">3</div>

	</div>
</body>
<script type="text/javascript">
	window.__parent__.onclick = function(ev){
		var oEvent = ev || window.event;
		var target = oEvent.srcElement || oEvent.target;
		
		//可以用任何标识来判断
		if(target.tagName.toLowerCase() == 'div'){
			alert(target.innerHTML);

		}
		if(target.className == 'child'){
			console.log(target)
		}

	}
</script>
</html>
```

### 事件冒泡
当事件发生后，这个事件就要开始传播(从里到外或者从外向里)。为什么要传播呢？因为事件源本身（可能）并没有处理事件的能力，即处理事件的函数（方法）并未绑定在该事件源上。例如我们点击一个按钮时，就会产生一个click事件，但这个按钮本身可能不能处理这个事件，事件必须从这个按钮传播出去，从而到达能够处理这个事件的代码中（例如我们给按钮的onclick属性赋一个函数的名字，就是让这个函数去处理该按钮的click事件），或者按钮的父级绑定有事件函数，当该点击事件发生在按钮上，按钮本身并无处理事件函数，则传播到父级去处理。

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>s
	<script type="text/javascript">
		window.onload = function(){
			var body = document.getElementById('body');
			var div = document.getElementById('div');
			var aaa = document.getElementById('a');

			function bubble(ev){

				if(ev){
					// !ie
					ev.stopPropagation()
				}else if(window.event){
					// ie
					window.event.cancelBubble = true;
				}
			}
			body.onclick = function(event){
				alert('ddd');
				bubble(event)
			}
			div.onclick = function(event){
				alert('bbb');
				
			}
			aaa.onclick = function(event){
				alert('aaa')
				bubble(event)
			}
		}
	</script>
</head>
<body id="body">
<div id="div">
 <a id="a" href="#" class="cooltip" title="这是我的超链接提示1" >提示</a>
</div>
</body>
</html>
```
### 事件捕获
事件捕获是先由最上一级的节点先接收事件，然后向下传播到具体的节点。"DOM2级事件”规定的事件流包含三个阶段：事件捕获阶段，处于目标阶段和事件冒泡阶段。首先发生的是事件捕获，然后是实际的目标接收到事件，最后阶段是冒泡阶段其中ie是没有事件捕获的

![javascript-event](/blog/images/events/event.jpg)
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="myDiv"></div>
</body>
<script type="text/javascript">
        var div=document.getElementById("myDiv");    
        
        div.addEventListener('click',function(){
        	alert("div");//2
        })
        document.body.addEventListener("click",function(event){
            alert("event catch");//1
        },true);


        document.body.addEventListener("click",function(event){
            alert("event bubble");//3
        },false);
        
        
    </script>

</html>
```
### 阻止默认事件
事件捕获和事件冒泡也是浏览器的默认行为，不进行手动改变的行为都是默认行为

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
 	<a id="a" href="http://www.baidu.com">百度一下</a>
    <script type="text/javascript">
    	var a = document.getElementById('a')
    	// DOM0的可以用preventDefault也可以用return false
    	// a.onclick = function(){
    	// 	return false;	
    	// }
    	//DOM2的阻止默认事件用preventDefault
    	a.addEventListener('click',function(ev){
    		ev.preventDefault();
    		
    	})
    </script>
</body>
</html>


```



















