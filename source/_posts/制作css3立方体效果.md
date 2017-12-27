---
title: 制作css3立方体效果
---
单纯的css我们知道是无法实现立体效果的，如果实现立体效果也是利用图片进行的视觉效果的模拟，但是在真正的意义上是静态的，操作起来是麻烦的，会占用更多的资源，造成过多的资源浪费是没有必要的，抛开浏览器的兼容，为了前端开发者的工作，利用css3来实现立方体


### 准备六个面及舞台

``` bash
<!DOCTYPE html>
<html>
<head>
	<title>鼠标电池没电了需要加个滚轮的放大缩小</title>
	<style type="text/css">
		html,body{
			width: 100%;height: 100%;background: black;
		}
		.box{
			margin-top: 200px;
			perspective: 1000px;
		}
		.stage {
			position: relative;
			margin: 0 auto;
		    width: 200px;
		    height: 200px;
		    transform-style: preserve-3d;
		    transform: rotateX(12deg) rotateY(12deg); 
		    transform-origin: 50% 50% 100px;

		}
		.stage > div {
		    width: 200px;
		    height: 200px;
		    text-align: center;
		    line-height: 200px;
		    opacity: .6;
		    transform-style: preserve-3d;
		    transform-origin: 50% 50% ;	
		    position: absolute; 
		}

		.stage .front{
			background: red; 
			
		    transform: translateZ(0); 

		}
		.stage .back{
			background: green;
			
		    transform: translateZ(200px);
		}
		.stage .right{
			background: blue;
		    left: 100px;
		    transform: rotateY(90deg) translateX(-100px);
		}
		.stage .left{
			background: yellow;
		    left: -100px;
		    transform: rotateY(90deg) translateX(-100px);
		}
		.stage .bottom{
			    background: yellow;
		    top: 100px;

		    transform: rotateX(90deg) translateY(100px);
		}
		.stage .top{
			background: yellow;
		     top: -100px;
	
		    transform: rotateX(90deg) translateY(100px);
		}
		
	</style>
</head>
<body>
	<div class="box">
		<div class="stage" id="stage">
			<div class="front">前</div>
			<div class="back">后</div>
			<div class="left">左</div>		
			<div class="right">右</div>
			<div class="top">上</div>
			<div class="bottom">下</div>
		</div>
	</div>
</body>
<script type="text/javascript">  
		function move(Ddis,last_dur){
			var dur = {};
			document.onmousemove = function(ev){
				var oEvent = ev || window.event;
				var Mdis = {
					x:oEvent.clientX,
					y:oEvent.clientY
				}
				
				

				dur.x = -(Mdis.y - Ddis.y),
				dur.y = Mdis.x - Ddis.x
				
				
				dur.x+=last_dur.x;
				dur.y+=last_dur.y;

				window.stage.style.transform  =  'rotateX('+dur.x+'deg) rotateY('+dur.y+'deg)';

	
			}	
			return dur
		}
		function up(last_dur,dur){

			document.onmouseup = function(){
				
				last_dur.x = dur.x%360;
				last_dur.y = dur.y%360;
				
				this.onmousemove = null;
				this.onmouseup = null;
			}
			return false;
		}
		function down(){
			// 自豪的使用个闭包
			var last_dur  = {
				x:0,
				y:0
			}
			
			return function(ev){
				var oEvent = ev || window.event;
				var Ddis = {
					x:oEvent.clientX,
					y:oEvent.clientY
				}
				var dur = move(Ddis,last_dur)					
				return up(last_dur,dur);
			}
		}
		document.onmousedown = down();
</script>
</html>
```



