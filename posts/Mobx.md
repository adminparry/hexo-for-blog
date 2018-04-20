---
title: Mobx
---

Mobx 一个观察者模式的轻量级框架 它的应用场景现大部分react开发中 当然我们也可以单独使用 不过单独使用的场景现应用较少 本文以react场景展开

### 一目了然的例子
``` bash
<script type="text/javascript">
import React, {Component} from 'react';
	import ReactDOM from 'react-dom';
	import {observer} from 'mobx-react';
	import {observable, computed, Reaction, action} from 'mobx';
	
	@observer
	class TodoListView extends Component {

	    render() {

	    	const {todoList,changeTodoTitle} = this.props;
	    	console.log(this.props)
	        return (
	        	<div>
		            <ul>
		                {todoList.todos.map(todo =>
		                    <TodoView todo={todo} key={todo.id} />
		                )}
		            </ul>
		            Tasks left: {todoList.unfinishedTodoCount}
		            <button onClick={e=>todoList.changeTodoTitle({index:0,title:'i am chinese'})}>更改</button>
		        </div>
	        )
	    }
	}

	const TodoView = observer(({todo}) =>{
		return (<li>
	       
	        <label>
 			<input
	            type="checkbox"
	            checked={todo.finished}
	            onClick={() => todo.finished = !todo.finished}
	        />
	        {todo.title}</label>
	    </li>
	    )
	})

	class TodoList {
	    @observable todos = [{
	    	title:'我是中国人',
	    	finished:true
	    },{
	    	title:'china number one',
	    	finished:true
	    }];

	    @action.bound
	    changeTodoTitle({index,title}){
		    this.todos[index].title = title
		}

	    @computed get unfinishedTodoCount() {
	        return this.todos.filter(todo => !todo.finished).length;
	    }
	}
	const store = new TodoList();
	ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('app'));
</script>
```

### observer

观察者

### observable

被观察的对象

### computed

计算属性

### action





