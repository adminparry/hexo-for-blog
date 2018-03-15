---
title: vuex简单使用
---
### 示例

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
	<script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.js"></script>
</head>
<body>
	<div id="app">
	  <p>{{ count }}</p>
	  <p>
	    <button @click="increment">+</button>
	    <button @click="decrement">-</button>
	  </p>
	</div>
</body>
<script type="text/javascript">
	const store = new Vuex.Store({
	  state: {
	    count: 0
	  },
	  mutations: {
	  	increment: state => state.count++,
	    decrement: state => state.count--
	  }
	})

	new Vue({
	  el: '#app',
	  computed: {
	    count () {
		    return store.state.count
	    }
	  },
	  methods: {
	    increment () {
	      store.commit('increment')
	    },
	    decrement () {
	    	store.commit('decrement')
	    }
	  }
	})
</script>
</html>

``` 
### state
``` bash

```