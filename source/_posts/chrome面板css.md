---
title: chrome面板css
---

### 滚动条

::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

``` bash
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:yellow;
transition:width 2s;
-moz-transition:width 2s; /* Firefox 4 */
-webkit-transition:width 2s; /* Safari and Chrome */
-o-transition:width 2s; /* Opera */
}

div:hover
{
width:300px;
}
</style>
</head>
<body>

<div></div>

<p>请把鼠标指针放到黄色的 div 元素上，来查看过渡效果。</p>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

</body>
</html>

```

### video&audio

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		video::-internal-media-controls-download-button {
		    display:none;
		}
		video::-webkit-media-controls-enclosure {
		    overflow:hidden;
		}
		video::-webkit-media-controls-panel {
		    width: calc(100% + 30px); 
		}
	</style>
</head>
<body>
	<video controls="true">
		<source src="" type="">
	</video>
</body>
</html>
```
