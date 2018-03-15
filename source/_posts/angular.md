---
title: angularjs的圈子越来越大
---
angularjs著名的背景谷歌诞生于2009年，从12年开始mv*的框架渐渐的走进前端的流行区域，走进生产，随着线上逐渐增多，社区以及博客也变得越加丰富，这是每个优秀框架所必经的，而在现在使用的用户量也开始增长了

## 脏检查机制

``` bash
<body>
   <input type="text" />
 
<a href="#" onclick="updateScopeValue();">Set input value to Bob</a>
 
</body>
<script type="text/javascript">

var Scope = function( ) {
    this.$$watchers = [];    
};
 
Scope.prototype.$watch = function( watchExp, listener ) {
    this.$$watchers.push( {
        watchExp: watchExp,
        listener: listener || function() {}
    } );
};
 
Scope.prototype.$digest = function( ) {
    var dirty;
 
    do {
            dirty = false;
 
            for( var i = 0; i < this.$$watchers.length; i++ ) {
                var newValue = this.$$watchers[i].watchExp(),
                    oldValue = this.$$watchers[i].last;
 
                if( oldValue !== newValue ) {
                    this.$$watchers[i].listener(newValue, oldValue);
 
                    dirty = true;
 
                    this.$$watchers[i].last = newValue;
                }
            }
    } while(dirty);
};
 
 
var $scope = new Scope();
 
$scope.name = 'Ryan';
 
var element = document.querySelectorAll('input');
 
element[0].onkeyup = element[0].onpaste =  element[0].onmouseenter= function() {
	setTimeout(function(){

		$scope.name = element[0].value;
 
    	$scope.$digest();
	})
   
};
 
$scope.$watch(function(){
    return $scope.name;
}, function( newValue, oldValue ) {
    console.log('Input value updated - it is now ' + newValue);
     
    element[0].value = $scope.name;
} );
 
var updateScopeValue = function updateScopeValue( ) {
    $scope.name = 'Bob';
    $scope.$digest();
};
</script>
``` 
## 快速开始

### touch index.html

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
</head>
<body>

<div ng-app="myApp"  ng-controller="myCtrl"  ng-init="firstName='John'">
 	<p>名字 : <input type="text" ng-model="name"></p>
 	<h1>Hello {{name}}</h1>
 	<p>我的第一个表达式: {{ 5 + 5 }}</p>
 	 <p>在输入框中尝试输入：</p>
     <p>姓名：<input type="text" ng-model="firstName"></p>
     <p>你输入的为： {{ firstName }}</p>
 	 名字: <input ng-model="name">
 	 ...
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>
</body>
</html>
```
AngularJS 指令是扩展的 HTML 属性，带有前缀 ng-。
ng-app 指令初始化一个 AngularJS 应用程序。
ng-init 指令初始化应用程序数据。
ng-model 指令把元素值（比如输入域的值）绑定到应用程序
...[更多](http://www.runoob.com/angularjs/angularjs-reference.html)
最基本的使用参考菜鸟教程
### angular2

``` bash
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
```

angular2采用语法糖typescript其形变而神不变

### ionic

``` bash
<body ng-app="starter" ng-controller="actionsheetCtl" >
	<ion-pane>
	    <ion-content >
	        <h2 ng-click="action()">$ionicBackdrop</h2>
	    </ion-content>
	</ion-pane>
</body>
```
同样是angular的移动平台方案
[更多](http://www.runoob.com/ionic/ionic-tutorial.html)

