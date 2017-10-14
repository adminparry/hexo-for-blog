---
title: js之比较两个对象
---
在每个开发语言来说比较对象通常是不理智,程序往往比较两个对象是比较堆内存地址,比如当我们比较两个数组的时候,无论数组中的元素一样或者是不一样,那么返回的结果都是false,因为它们的引用地址不一样,正如前面所写到的==和===的区别中,当然我们有的时候就是需要比较两个对象,但不是比较地址

### 结果
``` bash
valueEqual(1, 1)                           // true
valueEqual('asdf', 'asdf')                 // true
valueEqual('asdf', new String('asdf'))     // true
valueEqual(true, true)                     // true
valueEqual(true, false)                    // false
valueEqual({ a: 'a' }, { a: 'a' })         // true
valueEqual({ a: 'a' }, { a: 'b' })         // false
valueEqual([ 1, 2, 3 ], [ 1, 2, 3 ])       // true
valueEqual([ 1, 2, 3 ], [ 2, 3, 4 ])       // false

```
### 实现

``` bash
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>

</body>
<script type="text/javascript">
    function valueEqual(a, b) {
      /*绝对一样 连地址都一样 通常为内置对象*/
    if (a === b)
      return true
    /*不知道是什么 */
    if (a == null || b == null)
      return false
    /*比较两个数组并且索引对应*/
    if (Array.isArray(a)) {
      return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
        return valueEqual(item, b[index])
      })
    }

    const aType = typeof a
    const bType = typeof b
    /*比较原始值类型*/
    if (aType !== bType)
      return false
  /*比较两个对象*/
    if (aType === 'object') {
      /*这里的处理不是很好 如果重写了valueOf方法就废了*/
      const aValue = a.valueOf()
      const bValue = b.valueOf()
      /*比较原始值*/
      if (aValue !== a || bValue !== b)
        return valueEqual(aValue, bValue)

      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)
      /*比较对象键长度*/
      if (aKeys.length !== bKeys.length)
        return false
      /*在键长度相同的情况下比较每个键的值*/
      return aKeys.every(function (key) {
        return valueEqual(a[key], b[key])
      })
    }

    return false
  }

</script>
</html>

```


参考来源:https://github.com/mjackson/value-equal/edit/master/modules/index.js