---
title: XMLHttpRequest Level 2
---


### formData
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form id="form">
	<input type="file" name="file">
	<button id="btn">submit</button>
</form>
</body>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
	var fm = document.querySelector('#form');
	var btn = document.querySelector('#btn');

	var fd = new FormData();
	btn.click(()=>{

		$.ajax({
			url:'http://www.baidu.com',
			type:'post',
			data:fd,
			cache:false,
			contentType:false,
			processData:false,
			xhr:()=>{
				var xhr = new XMLHttpRequest();
				return xhr;
			},
			success:(res)=>{
				console.log(res);
				return false;
			},
			error:()=>{

			}
		})
	})

</script>
</html>
```

