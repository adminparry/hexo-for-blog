---
title: vue简单使用
---
随着react的流行，相继又会出现其他的东西很容易想象的到，那么vue就拿出来说一说，说一说简单的使用，Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架，这里提到一个词叫渐进式，但是并没有解释这个词语，给我的理解就是作者很低调，未来的事情会有很多变化vue是一种当下的解决方案 也衍生出了我对作者的尊敬
### 全局api
``` bash

``` 
## 生命周期

![lifecycle](/blog/images/vue/lifecycle.png)

``` bash
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
</head>
<body>

<div id="app">
     <p>{{ message }}</p>
</div>

<script type="text/javascript">
    
  var app = new Vue({
      el: '#app',
      data: {
          message : "xuxiao is boy" 
      },
       beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
               console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
               console.log("%c%s", "color:red","message: " + this.message)  
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);   
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el); 
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);  
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message)
        }
    })
</script>
</body>
</html>
```
### 过滤器
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>

</body>
</html>
```
### solt
单个插槽	
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>
	<div id="app">
		<v-one>
		    <!-- 这里的所有内容会替换掉slot -->
		    <p>初始化段落一</p>
		    <p>初始化段落二</p>
		</v-one>
	</div>
	<template id="one">
		<div>
		  <h1>组件标题</h1>
		  <slot></slot>
		  <p>组件段落内容</p>
		  <p>{{one}}</p>
		</div>
	</template>
</body>
<script type="text/javascript">
	var app = new Vue({
		el:'#app',
		components:{
			'v-one':{
				template:'#one',
				data() {
		          return {
		            'one': 'I am one'
		          }
		        }
			}
		}
	})
</script>
</html>
```
具名slot
这里需要注意的是需要一个根节点
 ``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>
	<div id="app">
		<v-two>
		    <p slot="first">初始化段落一</p>
		    <p slot="second">初始化段落二</p>
		</v-two>
	</div>
	<template id="two">
		<div class="root">
			<div class="first">
				<slot name="first"></slot>
			</div>
			<div class="second">
				<slot name="second"></slot>
			</div>
			<div class="last">
				{{ two }}
			</div>
		</div>
	</template>
</body>
<script type="text/javascript">
	var app = new Vue({
		el:'#app',
		components:{
			'v-two':{
				template:'#two',
				data() {
		          return {
		            'two': 'I am two'
		          }
		        }
			}
		}
	})
</script>
</html>
```作用域slot

 ``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>
	<div id="app">
		<v-three>
	      <!-- 父组件默认无法使用子组件数据 -->
	          <template scope="props">
	              <p>{{props.text}}</p>
	          </template>
	     </v-three>

	</div>
	<template id="three">
	    <div>
	        <!-- 把数据传递给slot,这样父组件也可以访问three这个组件的数据 -->
	      <slot :text="three"></slot>

	    </div>
  </template>
</body>
<script type="text/javascript">
	var app = new Vue({
		el:'#app',
		components:{
			'v-three':{
				template:'#three',
				data() {
		          return {
		            'three': 'I am three'
		          }
		        }
			}
		}
	})
</script>
</html>
```
### 指令
v-text {{}} => textContent 
v-html => innerHTML 
v-show => display:none
v-if v-else-if v-else => 根条件语句逻辑一样 而且顺序不能颠倒

``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>
<div id="app">
	<span v-text="msg"></span>
	<!-- 和下面的一样 -->
	<span>{{msg}}</span>
	<div v-html="html"></div>

	<h1 v-show="ok">Hello!</h1>

	<h1 v-if="ifi">Yes</h1>
	<h1 v-else-if="ifi == false">elseif</h1>
	<div v-else>
	  No
	</div>

	<div v-for="item in items">
		{{item}}
	</div>


	<!-- 方法处理器 -->
	<button v-on:click="doThis"></button>

	<!-- 对象语法 (2.4.0+) -->
	<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

	<!-- 内联语句 -->
	<button v-on:click="doThat('hello', $event)"></button>

	<!-- 缩写 -->
	<button @click="doThis"></button>

	<!-- 停止冒泡 -->
	<button @click.stop="doThis"></button>

	<!-- 阻止默认行为 -->
	<button @click.prevent="doThis"></button>

	<!-- 阻止默认行为，没有表达式 -->
	<form @submit.prevent></form>

	<!--  串联修饰符 -->
	<button @click.stop.prevent="doThis"></button>

	<!-- 键修饰符，键别名 -->
	<input @keyup.enter="onEnter">

	<!-- 键修饰符，键代码 -->
	<input @keyup.13="onEnter">

	<!-- 点击回调只会触发一次 -->
	<button v-on:click.once="doThis"></button>
</div>

</body>
<script type="text/javascript">
	var app = new Vue({
		el:'#app',
		data(){
			return {
				msg:'hello vue',
				html:'<h1>这是一个标题</h1>',
				ok:false,
				ifi:false,
				items:[1,2,3]

			}
		},
		methods:{
			doThis:function(){
				console.log('doThis')
			},
			doThat:function(){
				console.log('doThat')
			},
			onEnter:function(){
				console.log('onEnter')
			}
		}
	})
</script>
</html>
```
