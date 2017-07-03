---
title: 二分查找，冒泡排序，快速排序
---
在这里列出劳动人民的智慧，也算是网上公认的了，了解这些最基本的概念之后会给你以后程序设计带来一定的灵感和借鉴，就不多说了

## 快速开始

### 创建html文件
``` bash
$ touch index.html
```
在这里我们就用html运行在浏览器这样进行演示比较方便
### 二分查找

``` bash
//在这里我们需要一个有序的数组
var array = [1, 2, 4, 5, 6, 7, 8, 11, 22, 33];
//第一个参数为我们想找的数字，第二个为在哪个数组中找，第三个为从哪个位置开始找，第四个为到哪个位置结束
function binaryFind(wanna,arr,s,e){
		//如果没找到返回false
		if(s>e){
			return false;
		}
		var mid = Math.floor((s+e)/2);
		//如果找到返回true
		if(arr[mid] == wanna){
			return true;
		}else if(arr[mid] > wanna){
			return binaryFind(wanna,arr,s,mid -1)
		}else{
			return binaryFind(wanna,arr,mid + 1,e)
		}
	}
	//弹出1是否在整个数组中
	alert(binaryFind(1,array,0,array.length-1))
```

### 冒泡排序

``` bash
var arr = [1,3,4,5,6,5,3,3,6,7]

// 从大到小
function bubbleSort(arr){
	for (var i = 0; i < arr.length; i++) {
		for(var j = 0 ;j < arr.length - i;j++){

			// 想要如何排序对比较的两个值进行交换 从大到小还是从小到大改变判断条件就可以
			if(arr[j] < arr[j+1] ){
		
				var temp=arr[j];
			
				arr[j]=arr[j+1];
				
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
//弹出排序后的数组
alert(bubbleSort(arr))
```


### 快速排序

``` bash
var arr = [2,4,5,6,34,345,56,57,4,345,457,576,34,54]

	function quickSort(arr){
		if(arr.length <=1){
			return arr;
		}
		var pivotIndex = Math.floor(arr.length/2);
		// array
		//基准
		var pivot = arr.splice(pivotIndex,1)[0];

		var l = new Array();
		var r = [];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] < pivot){
				l.push(arr[i])
			}else{
				r.push(arr[i])
			}
		}
		// 合并 left pivot right
		return quickSort(l).concat([pivot]).concat(quickSort(r))
	}
	alert(quickSort(arr));
```

