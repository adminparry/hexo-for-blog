---
title: angularjs
---
angularjs著名的背景谷歌诞生于2009年，从12年开始mv*的框架渐渐的走进前端的流行区域，走进生产，随着线上逐渐增多，社区以及博客也变得越加丰富，这是每个优秀框架所必经的，而在现在使用的用户量也开始增长了
AngularJS 是一个 JavaScript 框架。它可通过 script 标签添加到 HTML 页面。
AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。

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
### 表达式

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app>
<p>我的第一个表达式: {{ 5 + 5 }}</p>
</div>

</body>
</html>

```

### 指令

ng-app 指令初始化一个 AngularJS 应用程序。
ng-init 指令初始化应用程序数据。
ng-model 指令把元素值（比如输入域的值）绑定到应用程序。

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="firstName='John'">

<p>在输入框中尝试输入:</p>
<p>姓名: <input type="text" ng-model="firstName"></p>
<p>你输入的为: {{ firstName }}</p>

</div>

</body>
</html>

```
ng-repeat 指令会重复一个 HTML 元素：

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div data-ng-app="" data-ng-init="names=['Jani','Hege','Kai']">
  <p>使用 ng-repeat 来循环数组</p>
  <ul>
    <li data-ng-repeat="x in names">
      {{ x }}
    </li>
  </ul>
</div>

</body>
</html>
```

自定义指令
元素名
``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body ng-app="myApp">

<runoob-directive></runoob-directive>

<script>
var app = angular.module("myApp", []);
app.directive("runoobDirective", function() {
    return {
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

</body>
</html>
```
自定义指令
属性

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body ng-app="myApp">

<div runoob-directive></div>

<script>
var app = angular.module("myApp", []);
app.directive("runoobDirective", function() {
    return {
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

</body>
</html>
```
自定义指令
类名

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body ng-app="myApp">

<div class="runoob-directive"></div>

<script>
var app = angular.module("myApp", []);
app.directive("runoobDirective", function() {
    return {
        restrict : "C",
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

<p><strong>注意：</strong> 你必须设置 <b>restrict</b> 的值为 "C" 才能通过类名来调用指令。</p>

</body>
</html>

```
自定义指令
注释

``` bash
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body ng-app="myApp">

<!-- directive: runoob-directive -->

<script>
var app = angular.module("myApp", []);
app.directive("runoobDirective", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

<p><strong>注意：</strong> 我们需要在该实例添加 <strong>replace</strong> 属性， 否则评论是不可见的。</p>

<p><strong>注意：</strong> 你必须设置 <b>restrict</b> 的值为 "M" 才能通过注释来调用指令。</p>

</body>
</html>

```

restrict 值可以是以下几种:
E 作为元素名使用
A 作为属性使用
C 作为类名使用
M 作为注释使用


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

