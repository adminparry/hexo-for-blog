---
title: js排序算法
---

## 插入排序
``` bash
<script type="text/javascript">

	function insertSort(arr){
		var len = arr.length;
		for(var i=1;i<len;i++){
			var item = arr[i];
			var j = i -1;
			while(j>=0 && arr[j] > item){
				arr[j+1] = arr[j];
				j--;
			}
			arr[j + 1] = item;
		}
	}

</script>
```


### 二分插入排序

``` bash
<script type="text/javascript">
	function binarySort(arr){
		var len = arr.length;
		for(var i = 1;i<len;i++){
			var item = arr[i],left = 0,right = i -1;
			while(left <= right){
				var mid = Math.floor((left + right) / 2);
				if(key < arr[mid]){
					right = mid - 1;
				}else{
					left = mid + 1;
				}
			}
			for(var j = i-1;j >= left;j--){
				arr[j+1] = arr[j]
			}
			arr[left] = key;
		}
		
		return arr;
	}
</script>
```

### 快速排序
``` bash
<script type="text/javascript">
	function quickSort(arr){
		if(arr.length < 2)return arr;

		var pivotIndex = Math.floor(arr.length / 2);
		var pivot = arr.splice(pivotIndex,1)[0];

		var left = [],right=[];
		for(var i = 0;i < arr.length;i++){
			if(arr[i] > pivot){
				right.push(arr[i]);
			}else{
				left.push(arr[i]);
			}
		}
		return quickSort(left).concat([pivot],quickSort(right));
	}
</script>
```
### 冒泡排序

内层循环过程中拿出最小的与外层循环当前的元素进行交换
例如[3,5,6,7,1,32]
外层 i=0 => 3
内层 把[5,6,7,1,32]中最小的元素与当前外层进行交换
[1,5,6,7,3,32]

外层 i=1 => 5
内层 把[6,7,3,32]中最小的元素与当前外层进行交换
[1,3,6,7,5,32]

重复动作

``` bash
<script type="text/javascript">
	function bubbleSort(arr){
		for (var i = 0; i < arr.length; i++) {
			for (var j = i+1;j < arr.length; j++) {
				if(arr[i] > arr[j]){
					[arr[i],arr[j]] = [arr[j],arr[i]]
				}
			}
		}
		return arr;
	}

</script>
```
### 选择排序
``` bash
<script type="text/javascript">
	function unique(array){
		array.sort();
		
		var arr = [array[0]];

		for (var i = 0; i < array.length; i++) {
			if(arr[arr.length - 1] !== array[i]){
				arr.push(array[i])
			}
			
		}
		return arr;
	}
</script>
```
遍历去重
从左到右拿元素 拿一个元素跟该元素右的所有元素比较 如果该元素存在 就拿第二个元素以此类推 如果不存在就放在新的数组返回，去重后依然顺序不保证
``` bash
<script type="text/javascript">

	function unique(array){
		
		
		var arr = [];

		for (var i = 0; i < array.length; i++) {
			for( var j = i + 1; j < array.length; j++){
				if(array[i] === array[j]){
					++i;
				}
					
			}
			arr.push(array[i])
			
		}
		return arr;
	}
</script>
```

### 二分查找

``` bash
<script type="text/javascript">
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
	
</script>
```

### 冒泡排序

``` bash
<script type="text/javascript">
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
	
</script>
```


### 快速排序

``` bash
<script type="text/javascript">
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
	
</script>
```
### 插入排序
``` bash
<script type="text/javascript">
	function insertionSort(arr){
		var prevIndex,current;
		var array = arr,len = array.length;

		for (var i = 1; i < len; i++) {
			prevIndex = i - 1;
			current = array[i];
			while(prevIndex >= 0 && array[prevIndex] > current){
				array[prevIndex + 1] = array[prevIndex];
				prevIndex--;

			}
			array[prevIndex + 1] = current;
		}
		return array;
		
	}
</script>
```
http://www.cnblogs.com/dushao/p/6004883.html
