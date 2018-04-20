import store from '../store/index';
import {observer} from 'mobx-react';


@observer
class HelloMessage extends React.Component {
	

	getDefaultProps(){
		console.log('getDefaultProps')
	}
	getInitalState(){
		console.log('getInitalState')
	}

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   render() {
    return (
      <div onClick={ev => this.handleClick(ev)}>
        Hello {this.props.name},
        <span>等级：{this.props.level}</span>
        <span> my age is {this.state.age}</span>
      </div>
    );
  }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   // props changed
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return !false;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   constructor(props){
		super(props);
		this.state = {
			name:'bob',
			age:45
		}
		
	}
	handleClick(ev){
		this.setState({
			age:18
		})
		
		store.todos.title = "componentWillUnmount"
	}
  
}
export default HelloMessage