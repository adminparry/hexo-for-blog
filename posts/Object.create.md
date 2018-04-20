---
title: Object.create
---
``` bash
<script type="text/javascript">
	Object.create = function(){
		if(this.create)return this.create;

	}
	function binarySearch(wanna,s,e,arr){
		if(s > e)return -1;
		var mid = Math.floor((s+e)/2);
		if(arr[mid] == wanna){
			return mid
		}else if(arr[mid] < wanna){
			return binarySearch(wanna,mid + 1,e,arr)
		}else{
			return binarySearch(wanna,s, mid -1, arr)
		}
	}

	function quickSort(arr){
		if(arr.length <= 1)return arr
		var pivotIndex = Math.floor(arr.length /2);

		var pivot = arr.splice(pivotIndex,1)[0];

		var left = [],right = [];
		for (var i = 0; i < arr.length; i++) {
			if(pivot > arr[i]){
				left.push(arr[i])
				
			}else{
				right.push(arr[i])
			}
		}
		return quickSort(left).concat([pivot],quickSort(right))
	}
	quickSort([1,3,,6,7,9,,56,4,67,8,9])
</script>
```
