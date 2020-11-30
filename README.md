## 基于 Vue 2 开发的 UI 组件库
开发思路参考于各大平台优秀的 UI 框架，
**## Introduction**

This library is a hands-on project, I've done with reference to several excellent component libraries.



If this project has helped you out, please support it with a star🌟.



**## Documentation**

To check out live examples and documents, visit https://xxxx



To view the source code, visit https://gitee.com/what_and/wheel

**## Quick start**

\```

npm install wheel-hcjv

\```

\```js

//main.js

import 'wheel-hcjv/dist/wheel-hcjv.css'

\```

Introduction part:

\```js

//App.vue

<template>


  <div id="app">


    <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <w-button>A default button</w-button>

 </div>

</template>



<script>


import {Button as WButton} from 'wheel-hcjv'



export default {

 name: 'App',

 components: {

  HelloWorld,

  WButton

 }

}

</script>

\```



**## Compiles and hot-reloads for development**

\```

npm run serve

\```



**## Compiles and minifies for production**

\```

npm run build

\```

**## follow-up work**



Through this small trial let me understand the differences between a number of component libraries.



I'll spend the rest of the time refactoring the entire project, adding more components, and trying out multi-terminal compatibility issues.