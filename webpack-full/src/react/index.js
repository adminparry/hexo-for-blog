// import {observer} from 'mobx-react';
// import store from './store/index';
// import HelloMessage from './component/hello';


// // 观察者
// @observer
// class Root extends React.Component{
// 	constructor(p){
// 		super(p);
// 		this.state = {
// 			name:'yellow bug'
// 		}
// 	}
// 	render(){
// 		return (
// 			<div className="favor">
// 				<span onClick={e=>this.handleCilck(e)}>等级：{this.props.level}</span>
// 				<span onClick={e=>this.handleCilck(e)}>store：{this.props.store.todos.title}</span>

// 				<HelloMessage name={this.state.name} level="1"/>
// 			</div>
// 		)
// 	}
// 	handleCilck(){
// 		this.setState({
// 			name:'Taylor'
// 		})
// 		store.todos.title = "getElementById"
// 	}
// }
// ReactDOM.render(
//   <Root level="0" store={store} />,
//   document.getElementById('app')
// );

	// import React, {Component} from 'react';
	// import ReactDOM from 'react-dom';
	// import {observer} from 'mobx-react';
	// import {observable, computed, Reaction, action} from 'mobx';
	// class TodoList {
	//     @observable todos = [{
	//     	title:'我是中国人',
	//     	finished:true
	//     },{
	//     	title:'china number one',
	//     	finished:true
	//     }];

	//     @action.bound
	//     changeTodoTitle({index,title}){
	// 	    this.todos[index].title = title
	// 	}

	//     @computed get unfinishedTodoCount() {
	//         return this.todos.filter(todo => !todo.finished).length;
	//     }
	// }
	// const store = new TodoList();


	// @observer
	// class TodoListView extends Component {
	// 	constructor(props ) {  
	// 		 super(props );
	// 		 // this.props = store;
	// 		 // this.store = store;

	// 	 }  


	//     render() {
	    	
	//         return (
	//         	<div>
	// 	            <ul>
	// 	                {store.todos.map(todo =>
	// 	                    <TodoView todo={todo} key={todo.id} />
	// 	                )}
	// 	            </ul>
	// 	            Tasks left: {store.unfinishedTodoCount}
	// 	            <button onClick={e=>store.changeTodoTitle({index:0,title:'i am chinese'})}>更改</button>
	// 	        </div>
	//         )
	//     }
	// }

	// const TodoView = observer(({todo}) =>{
	// 	return (<li>
	       
	//         <label>
 // 			<input
	//             type="checkbox"
	//             checked={todo.finished}
	//             onClick={() => todo.finished = !todo.finished}
	//         />
	//         {todo.title}</label>
	//     </li>
	//     )
	// })

	
	// ReactDOM.render(<TodoListView  />, document.getElementById('app'));

class App extends React.PureComponent {
  state = {
    items: [1, 2, 3]
  }
  handleClick = () => {
    const { items } = this.state;
      items.shift();
	  items.push(items[items.length - 1] + 1);
	  this.setState({ items: [].concat(items) });
  }
  render() {
    return (<div>
      <ul>
        {this.state.items.map(i => <li onClick={this.handleClick} key={i}>{i}</li>)}
      </ul>
      <button onClick={this.handleClick}>delete</button>
    </div>)
  }
}

ReactDOM.render(<App  />, document.getElementById('app'));