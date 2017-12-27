---
title: web前端之单页面应用
---
不知道从什么时候开始，单页面应变得流行起来，单页面应用（SPA）是旨在对Web应用发动革命的软件运动中可信度很高的一种。此类应用有望进行更加模块化的开发，令应用更加容易地适配与多个设备，并拥有更好的应用生命周期管理—这些几乎是软件架构师希望的全部


### 单页面的优缺点

优点：
1.耦合度降低，传统的开发是由后台渲染，路由也是又后台进行控制，在一定程度上可以减轻服务器压力
2.工作划分清晰，前台的事情就交给前台的人员去维护，后台就后台的人员维护
缺点：
1.不利于SEO
2.初次加载在一定程度上会增多

### 实现方式
HTML5 History API
history.pushState(state, title, url)
history.replaceState(state, title, url)
window.onpopstate 事件
IE9及以下不支持pushState 只能利用Url的Hash，也即是#号
window.onhashchange 事件

### 前端的一些路由框架
可以抄袭ember.js路由的解决方案，像一些其他的框架都是这样做的，react-router vue-router
也可以使用jquery的路由框架，我忘记叫什么名字了好像是summy.js
也有值得参考的director.js

