---
title: CSS的hack技巧浏览器前缀
---
 所谓 CSS Hack，是指在 CSS 代码中嵌入诸如 *，*html 等代码，方便于独立控制某种浏览器的具体样式。比如有些 CSS Hack 只能被 IE6 或 IE7 识别，而 Firefox 等浏览器则不能识别。这样一来可以有效控制 CSS 在不同浏览器的表现，避免撰写多个 CSS 文件。

 一.常用 CSS Hack 的写法， 只需考虑IE6\IE7\火狐（Firefox）这3个浏览器即可兼容全部浏览器。 帮助你更好地控制页面呈现：

### * 符号
``` bash
IE 浏览器能识别 * 符号，但其他浏览器诸如 Firefox、Opera、Chrome 等不能识别 * 符号。
例：在 Firefox 和 IE 中呈现不同的文字颜色： color:red;*color:blue;//在 Firefox 等非 IE 核心浏览器中，文字呈现红色；而 IE 中呈现蓝色。
```
### !important
``` bash
IE7 不但能识别 * 符号，还能识别 !important，而 IE6 只能识别前者。
例：在 IE6 和 IE7 中呈现不同的文字颜色： color:red !important;color:blue;//在 IE7 浏览器中，文字呈现红色；而 IE6 中呈现蓝色。
```

### 综合 1 和 2，利用上述浏览器特性，可在 CSS 中判别 Firefox，IE7，IE6 并加载不同样式。

例：在 Firefox，IE7，IE6 中呈现三种不同文字颜色： color:blue;*color:red !important;*color:green;//在 Firefox 中，文字呈现蓝色，在 IE7 浏览器中，呈现红色；而 IE6 中呈现蓝色。

### *html 和 *+html
``` bash
IE 核心的浏览器能识别*html 和*+html，而 Firefox 等非 IE 核心浏览器不能识别。
例：在 Firefox，IE7，IE6 中呈现三种不同文字颜色： #div {color:red;}*html #div {color:green;}*+html #div{color:blue;}//第一句 Firefox 等可以正常识别，所以这些浏览器中文字呈红色；//第二句 IE6 能识别并执行，用于针对 IE6 独立写的样式，文字绿色；//第三句只有 IE7 才能正确识别，而 IE6 和其他非 IE 核心浏览器不能，文字呈蓝色
```

具体区别如下：

区别IE6与FF：
background:orange;*background:blue;
区别IE6与IE7：
background:green !important;background:blue;
区别IE7与FF：
background:orange; *background:green;
区别FF，IE7，IE6：
background:orange;*background:green !important;*background:blue;


注：IE都能识别*;标准浏览器(如FF)不能识别*；
IE6能识别*，但不能识别 !important,
IE7能识别*，也能识别!important;
FF不能识别*，但能识别!important;以下是各浏览器CSS hack表格

另外再补充一个，下划线"_",
IE6支持下划线，IE7和firefox均不支持下划线。

于是大家还可以这样来区分IE6，IE7，firefox: background:orange;*background:green;_background:blue;

注：不管是什么方法，书写的顺序都是firefox的写在前面，IE7的写在中间，IE6的写在最后面。


### 例子
要求说明：假如我们设置一个类名为exple的类CSS属性,CSS样式边框为1PX黑色边框，高度为100PX并要求，在IE6浏览器下宽度为100PX；IE7浏览器宽度下为150PX；火狐IE8谷歌浏览器下宽度为200PX；(PX是长度单位像素)

则CSS代码如下：
``` bash
.exple{border:1px solid #000; height:100px;width:200px; *width:150px !important; *width100px;}
这 样只要在html设置一个div的类(class="exple"),这样这部分在火狐、IE8、谷歌浏览器下就会显示宽度为200px高度为100px 带1px的黑边框的方块；IE7浏览器宽度下为150PX高度为100px带1px的黑边框的方块；在IE6浏览器下就会显示出长度和宽度为100px的 带1px黑边的正方形。
```
### CSS里的浏览器前缀
Firefox:-moz-box-shadow
Safari:-webkit-box-shadow
Opera:-o-box-shadow
IE:-ms-box-shadow  