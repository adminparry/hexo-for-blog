---
title: webpack参数篇
---



### ProvidePlugin
对于文件来说可能每个文件每次都要import $ from 'jQuery'之类的 可以这样配置
``` bash
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
]
```
这样就可以直接使用$ 而不用写import $ from 'jQuery'

### 
