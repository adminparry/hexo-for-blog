---
title: react
---
react作为2015年的新宠加入了前端的家庭，这个由Twitter光环的产物诞生，引起了无数前端爱好者的高度重视，作为一个mv*框架，他有什么不同之处呢，采用jsx格式进行html书写，创建过程就是框架最核心的，用起来就是以动态模板的形式来书写，跟传统mv*框架不同的是，传统的是声明式html模板，一起看一下


### react环境搭建

### 组件的生命周期
![react-lifecycle](/blog/images/react/react-lifecycle.png)

组件的生命周期可分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

生命周期的方法有：
componentWillMount 在渲染前调用,在客户端也在服务端。
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。

### 示例
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```
### 组件
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
</head>
<body>

</body>
<script type="text/babel">
	var HelloMessage = React.createClass({
	  render: function() {
	    return <h1>Hello World！</h1>;
	  }
	});
	 
	ReactDOM.render(
	  <HelloMessage />,
	  document.getElementById('example')
	);
</script>
</html>
```
### State

setState(object nextState[, function callback])
参数说明
nextState，将要设置的新状态，该状态会和当前的state合并
callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。


关于setState
不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。

replaceState(object nextState[, function callback])
nextState，将要设置的新状态，该状态会替换当前的state。
callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。


``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var LikeButton = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },
        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },
        render: function() {
          var text = this.state.liked ? '喜欢' : '不喜欢';
          return (
            <p onClick={this.handleClick}>
              你<b>{text}</b>我。点我切换状态。
            </p>
          );
        }
      });

      ReactDOM.render(
        <LikeButton />,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

### props

setProps(object nextProps[, function callback])
nextProps，将要设置的新属性，该状态会和当前的props合并
callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
设置组件属性，并重新渲染组件。
props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。


replaceProps(object nextProps[, function callback])
nextProps，将要设置的新属性，该属性会替换当前的props。
callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
replaceProps()方法与setProps类似，但它会删除原有 props。


``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var HelloMessage = React.createClass({
        render: function() {
          return <h1>Hello {this.props.name}</h1>;
        }
      });

      ReactDOM.render(
        <HelloMessage name="Runoob" />,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```
### Refs
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
    var MyComponent = React.createClass({
      handleClick: function() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
      },
      render: function() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
          <div>
            <input type="text" ref="myInput" />
            <input
              type="button"
              value="点我输入框获取焦点"
              onClick={this.handleClick}
            />
          </div>
        );
      }
    });

    ReactDOM.render(
      <MyComponent />,
      document.getElementById('example')
    );
    </script>
  </body>
</html>
```

ajax
``` bash
---
title: react
---
react作为2015年的新宠加入了前端的家庭，这个由Twitter光环的产物诞生，引起了无数前端爱好者的高度重视，作为一个mv*框架，他有什么不同之处呢，采用jsx格式进行html书写，创建过程就是框架最核心的，用起来就是以动态模板的形式来书写，跟传统mv*框架不同的是，传统的是声明式html模板，一起看一下


### react环境搭建

### 组件的生命周期
![react-lifecycle](/blog/images/react/react-lifecycle.png)

组件的生命周期可分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

生命周期的方法有：
componentWillMount 在渲染前调用,在客户端也在服务端。
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。

### 示例
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```
### 组件
``` bash
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
</head>
<body>

</body>
<script type="text/babel">
	var HelloMessage = React.createClass({
	  render: function() {
	    return <h1>Hello World！</h1>;
	  }
	});
	 
	ReactDOM.render(
	  <HelloMessage />,
	  document.getElementById('example')
	);
</script>
</html>
```
### State
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var LikeButton = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },
        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },
        render: function() {
          var text = this.state.liked ? '喜欢' : '不喜欢';
          return (
            <p onClick={this.handleClick}>
              你<b>{text}</b>我。点我切换状态。
            </p>
          );
        }
      });

      ReactDOM.render(
        <LikeButton />,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

### props
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var HelloMessage = React.createClass({
        render: function() {
          return <h1>Hello {this.props.name}</h1>;
        }
      });

      ReactDOM.render(
        <HelloMessage name="Runoob" />,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```
### Refs
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
    var MyComponent = React.createClass({
      handleClick: function() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
      },
      render: function() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
          <div>
            <input type="text" ref="myInput" />
            <input
              type="button"
              value="点我输入框获取焦点"
              onClick={this.handleClick}
            />
          </div>
        );
      }
    });

    ReactDOM.render(
      <MyComponent />,
      document.getElementById('example')
    );
    </script>
  </body>
</html>
```

ajax
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
  </head>
 <body>
    <div id="example"></div>
    <script type="text/babel">
      var UserGist = React.createClass({
        getInitialState: function() {
          return {
            word: 'a',
            resultSet: []
          };
        },

        componentDidMount: function() {
          
         this.serverRequest = this.handleInputOverrideAjax(_this);
        },
        handleInputOverrideAjax: function(_this){
        	
        	$.ajax({
	            url:'http://suggestion.baidu.com/su',
	            dataType: "jsonp",
	            jsonp:'cb',
	            data:{
	              wd:_this.state.word
	            },
	            success:function(data){
	              _this.setState({
	                resultSet: data.s
	              });

	            }.bind(_this)
	          })
        }
        handleInput: function(event) {
          this.setState({word:event.target.value},()=>{
            this.handleInputOverrideAjax(this);
          })
        },
        componentWillUnmount: function() {
          this.serverRequest.abort();
        },

        render: function() {
          return (
            <div>
             
              <input type="text" value={this.state.word} onInput={this.handleInput} /><br/>
              {
              this.state.resultSet.map((item)=>{
                return <p>{item}</p>
              })
              }
             
            </div>
          );
        }
      });

      ReactDOM.render(
        <UserGist source="http://suggestion.baidu.com/su" />,
        document.getElementById('example')
      );
    </script>
    <script type="text/javascript">
      
    </script>
  </body>
</html>
```
### 事件 & className
事件的名称为原有名称on后第一个字母大写的形式
class 写为 className
``` bash
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>菜鸟教程 React 实例</title>
    <style type="text/css">
    	.red{
    		color: red;
    	}
    </style>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
	<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
	<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
    var HelloMessage = React.createClass({
      getInitialState: function() {
        return {value: 'Hello Runoob!'};
      },
      handleChange: function(event) {
        this.setState({value: event.target.value});
      },
      render: function() {
        var value = this.state.value;
        return <div>
                <input type="text" value={value} onChange={this.handleChange} /> 
                <h4 className="red">{value}</h4>
               </div>;
      }
    });
    ReactDOM.render(
      <HelloMessage />,
      document.getElementById('example')
    );
    </script>
  </body>
</html>
```
### forceUpdate


forceUpdate([function callback])
参数说明
callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()
一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。

### findDOMNode


DOMElement findDOMNode()
返回值：DOM元素DOMElement
如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。


### isMounted


bool isMounted()
返回值：true或false，表示组件是否已挂载到DOM中
isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。


参考地址
http://www.runoob.com/react/react-tutorial.html