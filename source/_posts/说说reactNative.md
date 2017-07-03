---
title: 说说reactNative
---
说说前端框架的新宠react，reactNative是react的其中的一个分支，自从react别众人周知以来，就有大量前端开发者去真正的去运用到项目开发之中，react真正想完善的其实就是reactNative，它在内部帮助我们去做与ios Android的接口桥，使得前端开发人员也可以做原生的ios Android开发，前端已经从一个最简单的工作变成了最丰富的工作

[官方网址](http://facebook.github.io/react-native/)
首先react-native 是用于开发移动软件 android ios 应用
原理：react-native 作为中间件为JavaScript 提供接口 也就是说用JavaScript的方式去调用软件开发平台对应的原生接口

1.	开发平台环境搭建 android ios
2.	react-native 对应的也可以在npm中进行管理
3.	官方网站文档
4.	去写去用 

android 安卓开发环境 需要java环境
ios 开发环境 需要Xcode对应的支持

[极客学院文档地址](http://wiki.jikexueyuan.com/project/react-native/)

实际上来说实现移动端软件程序有好多解决方案，最起初的cordova就可以把html css js 编写的网页打包成应用程序，实现一个阅读浏览而非游戏的应用程序非常简单，画面也足够流畅，而reactNative来说似乎是想无缝对接android ios 谁也不知道未来会怎样，拭目以待

![react-native](/blog/images/react-native/1.png)
随便做点内容
说在前面的话：熟悉react 和 android或者ios开发的同学 上手非常容易

![react-native](/blog/images/react-native/2.png)
![react-native](/blog/images/react-native/3.png)

### index.ios.js

``` bash

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

import Shit from './TabBarIOS.js';
import Views from './View.js';

class AwesomeProject extends Component{
  render(){
    return(
     
        <Shit/>

  
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

```
### View.js

``` bash
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Views extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

```

### TabBarIOS.js
``` bash
'use strict';

import React, {
   Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';
import Views from './View.js';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

export default class Shit extends Component{
  constructor (props){
    super(props);
    this.statics = this.statics.bind(this);
    this.displayName = this.displayName.bind(this);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    }
    this._renderContent = this._renderContent.bind(this);
  }
  statics() {
    return{
       title: '<TabBarIOS>',
       description: 'Tab-based navigation.',
    }
   
  }

  displayName(){
    return 'TabBarExample';
  } 

  
  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: base64Icon, scale: 3}}
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

};

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 20,
  },
});


```
