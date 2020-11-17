# Menu 导航菜单
为页面和功能提供导航的菜单列表，常用于网站顶部

## 引入
```js
import {Tabs,TabsHead,TabsBody,TabsItem,TabsPanel} from 'wheel-hcjv'
Vue.component(Tabs);
Vue.component(TabsHead);
Vue.component(TabsBody);
Vue.component(TabsItem);
Vue.component(TabsPanel);
```

### 基础顶栏
水平的顶部导航菜单。

<w-menu></w-menu>


```vue
<template>
 <div>
    <Tabs :selected.sync="selecteTeb">
        <TabsHead>
             <TabsItem name="h" >Html</TabsItem>
             <TabsItem name="c">Css</TabsItem>
             <TabsItem name="j" >JavaScript</TabsItem>
             <TabsItem name="v" >Vue</TabsItem>
         </TabsHead>
         <TabsBody>
             <TabsPanel name="h">Html</TabsPanel>
             <TabsPanel name="c">Css</TabsPanel>
             <TabsPanel name="j">JavaScript</TabsPanel>
             <TabsPanel name="v">Vue</TabsPanel>
         </TabsBody>
    </Tabs>
 </div>
</template>
<script>
export default {
    data() {
        return {
            selecteTeb: 'h'
        }
    }
}
</script>
```


### 多功能顶栏
具有增添图标，禁用选项，设置按钮等功能

<w-menu-more></w-menu-more>


```vue
<template>
 <div>
    <Tabs :selected.sync="selecteTeb">
        <TabsHead>
              <template slot="actions">
                    <Button icon="settings">设置</Button>
             </template>
             <TabsItem name="h"><Icon name="like"></Icon>One</TabsItem>
             <TabsItem name="c" disabled>Two</TabsItem>
             <TabsItem name="j">Three<Icon name="download"></Icon></TabsItem>
             <TabsItem name="v">Four</TabsItem>
         </TabsHead>
         <TabsBody>
             <TabsPanel name="h">One</TabsPanel>
             <TabsPanel name="c">Two</TabsPanel>
             <TabsPanel name="j">Three</TabsPanel>
             <TabsPanel name="v">Four</TabsPanel>
         </TabsBody>
    </Tabs>
 </div>
</template>
<script>
export default {
    data() {
        return {
            selecteTeb: 'h'
        }
    }
}
</script>
```
## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: |:-:| :-:|:-:| :-: | 
| name | 菜单项及子菜单的唯一对应标识，必填 | String/Number | -<img width=200/> | - |         
| disabled | 禁用菜单项  |  Object | true/false | true |