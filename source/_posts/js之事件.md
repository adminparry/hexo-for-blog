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





















