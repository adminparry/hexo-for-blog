---
title: web网站接入qq
---
对于大多数网站来说使用较为广泛的人工客服或者在线沟通类的东西都用到qq互联，既方便又不收费
[官方网址qq互联](https://connect.qq.com/)

申请好自己的APPID

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	
	</style>
	<script charset="utf-8" type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php?key=这里是APPID"></script>
</head>

<body>
		
	 <button id="qq">qq</button>
</body>
<script>
	window.qq.onclick = function () {
        var btn = document.getElementsByTagName("head")[0].getElementsByTagName("iframe")[0].contentWindow.document.getElementById("launchBtn");
        if (btn.click) {
            btn.click();
        } else {
            var e = document.createEvent('MouseEvent');
            e.initEvent('click', true, true);
            btn.dispatchEvent(e);
        }
    }
            	
</script>
</html>
```
