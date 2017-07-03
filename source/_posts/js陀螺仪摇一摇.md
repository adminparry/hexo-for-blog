---
title: js陀螺仪摇一摇
---
微信的摇一摇或者什么摇一摇功能，主要是带有陀螺仪设备的仪器所具备的，主要的实现方式是陀螺仪水平，垂直坐标相对位置，在HTML5，devicemotion事件deviceorientation特性的运动传感器的封装时间装置，你可以通过改变运动时间获取设备的状态，加速和其他数据（有另一个角度deviceorientation事件提供设备，定位等信息）。

而通过DeviceMotion对设备运动状态的判断，则可以帮助我们在网页上就实现“摇一摇”的交互效果。

## Quick Start

### 判断浏览器是否支持

``` bash
if (window.DeviceMotionEvent){
	window.addEventListener('devicemotion',deviceMotionHandler, false);
} else {
	alert('不支持devicemotion事件');
}
```

如果不支持就不能继续了

### 获取设备加速度信息 accelerationIncludingGravity

``` bash
var lastX = lastY = lastZ = 0;
var lastTime = 0;

function deviceMotionHandler(event){
	var x,y,z, acceleration,currentTime;
	
	acceleration = event.accelerationIncludingGravity;
	x = acceleration.x;
	y = acceleration.y;
	z = acceleration.z;

	
 	if (Math.abs(x-lastX) > 12 || Math.abs(y-lastY) > 13 || Math.abs(z - lastZ) > 14){  
        alert('你摇动了')
    }

    lastX = x;
	lastY = y;
	lastZ = z;
	
}
```

### 实例

``` bash
<!doctype html>  
<html>  
    <head>  
    <meta charset="utf-8" />  
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>  
    <title>HTML5 手机摇一摇</title>  
    	<script src="./howler.min.js"></script>
        
    </head>  
    <body>  
             手机摇一摇，改变屏幕颜色。 
          
    </body>  
    <script type="text/javascript">
         
       	 
       	 

         (function(){

			function color(ele){
	       	 	var a = function(num){

	       	 		return parseInt(Math.random()*num);
	       	 	}
	       	 	var arr = [a(255), a(255), a(255)];
				ele.style.background = 'rgb('+arr.join(',')+')';
				console.log('rgb('+arr.join(',')+')')
	       	}


         	if (window.DeviceMotionEvent){
				window.addEventListener('devicemotion',deviceMotionHandler, false);
			} else {
				alert('不支持devicemotion事件');
			}
         	var lastX = lastY = lastZ = 0;
			var lastTime = 0;
			
			function deviceMotionHandler(event){
				var x,y,z, acceleration,currentTime;
				currentTime = new Date().getTime();

				acceleration = event.accelerationIncludingGravity;
				x = acceleration.x;
				y = acceleration.y;
				z = acceleration.z;

				// 灵敏度
			 	if ( Math.abs(x-lastX) > 12 || Math.abs(y-lastY) > 13 || Math.abs(z - lastZ) > 14 ){  
			 		// 最大频路是800ms一次
			 		if( Math.abs(currentTime - lastTime) > 800){
			 			
			        	color(document.body);
			        	lastTime = currentTime;
			 		}

			        
			    }

			    lastX = x;
				lastY = y;
				lastZ = z;
				
				
			}
         })()

        </script>  
</html>  
```

