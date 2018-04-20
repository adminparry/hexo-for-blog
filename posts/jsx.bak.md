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


```

