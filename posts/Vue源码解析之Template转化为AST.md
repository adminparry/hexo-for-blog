---
title: Vue源码解析之Template转化为AST
---
随着虚拟dom节点的盛行，从react出现之后，在Vue的mount过程中，template会被编译成AST语法树，AST是指抽象语法树（abstract syntax tree或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式。

### 断点调试

``` bash
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<div id="app" class="a">
   {{one}} + {{two}} = {{message}}
</div>
</body>
<script type="text/javascript">
  var app = new Vue({
    el: '#app',
    data: {
      one:1,
      two:2,
      message: 'Hello Vue!'
    },
    beforeCreate:function(){
      console.log('beforeCreate')
    },
    created:function(){
      console.log('created')
    }
  })

</script>
</html>

```
首先进入_init原型方法
![constructor](/blog/images/vue/constructor.png)
从中发现一个额外的事情 通过Object.defineProperty为原型上添加属性在原型中的this而其他的属性则加到对象的原型上

![mergeOptions](/blog/images/vue/mergeOptions.png)
除了添加属性之外钩子函数终于出现了
我们可以穷举的进一下看看 发现还是添加属性
在这里不难发现顺序执行我们实例化vue函数所传参数的beforeCreate方法created方法
initRender为该函数转移了战场我们进去
![initRender](/blog/images/vue/initRender.png)
initRender又把问题给了$mount
![$mount](/blog/images/vue/$mount.png)
通过获取getOuterHTML
$mount把问题给了compileToFunctions
![compileToFunctions](/blog/images/vue/compileToFunctions.png)
在这里做的事情比较多先进compile$$1看看
![compile$$1](/blog/images/vue/compile$$1.png)
根据指引进compile$1
![compile$1](/blog/images/vue/compile$1.png)
根据指引进parse
![parse](/blog/images/vue/parse.png)
看来还得进parseHTML看看
![parseHTML](/blog/images/vue/parseHTML.png)
一个while循环好像是在处理outerHMLT字符串 看看都动了什么手脚

``` bash
<script type="text/javascript">
function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a script or style element
    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd > 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
    }

    if (html === last && options.chars) {
      options.chars(html);
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag('', lastTag);
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag('', tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, attrs: attrs });
      lastTag = tagName;
      unarySlash = '';
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tag, tagName, start, end) {
    var pos;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      var needle = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].tag.toLowerCase() === needle) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (tagName.toLowerCase() === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (tagName.toLowerCase() === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}
</script>
```
```bash 
<script type="text/javascript">
在我这里我首先进入的是 parseStartTag
html.indexOf('<');先判断<符号的索引等于0 然后大于0
如果是{{}}表达式的文本节点
搞了个对象
{
  type: 2,
  expression: ""\n   "+_s(one)+" + "+_s(two)+" \n"",
  text: "
   {{one}} + {{two}} 
"
}

搞了个对象
{
  tagName: 'div',
  attrs: [['id=app','id','=','app'],['class=a','class','=','a']],
  end:24,
  start:0
  unarySlash: ''
}
然后转换了一下
{
attrsMap:{class:'a',id:'app'},
children:[{
  type: 2,
  expression: ""\n   "+_s(one)+" + "+_s(two)+" \n"",
  text: "
   {{one}} + {{two}} 
"
}]
}
</script>
```
![parseStartTag](/blog/images/vue/parseStartTag.png)
有几段正则拿出来看看
```bash
<script type="text/javascript">

  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  var startTagOpen = new RegExp('^<' + qnameCapture);

  var startTagClose = /^\s*(\/?)>/;

  var singleAttrIdentifier = /([^\s"'<>/=]+)/;
  var singleAttrAssign = /(?:=)/;
  var singleAttrValues = [
    // attr value double quotes
    /"([^"]*)"+/.source,
    // attr value, single quotes
    /'([^']*)'+/.source,
    // attr value, no quotes
    /([^\s"'=<>`]+)/.source
  ];
  var attribute = new RegExp(
    '^\\s*' + singleAttrIdentifier.source +
    '(?:\\s*(' + singleAttrAssign.source + ')' +
    '\\s*(?:' + singleAttrValues.join('|') + '))?'
  );

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
</script>
```
然后回到了compile$1
{
render:"with(this){return _h('div',{staticClass:"a",attrs:{"id":"app"}},["\n   "+_s(one)+" + "+_s(two)+" \n"])}",
staticRenderFns:[]
}
回到compileToFunctions回到$mount执行mount方法然后执行原型_mount方法

![_mount](/blog/images/vue/p_mount.png)

然后执行原型方法_render和_update _watcher
![_render](/blog/images/vue/p_render.png)

![_update](/blog/images/vue/p_update.png)

在这里不难发现顺序执行我们实例化vue函数所传参数的beforeMount方法

https://segmentfault.com/a/1190000011531094