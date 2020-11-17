# Button 按钮
按钮，提供几种基础样式，可设置图标，并切换图标位置。

## 引入

```js
import {ButtonGroup,Button} from 'wheel-hcjv';

Vue.component(ButtonGroup);
Vue.component(Button);
```

## 例子

### 改变颜色    
基础的按钮用法。 

<w-button></w-button>

```html
<Button type="default">默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

 
### 禁用状态   
按钮不可用状态。    

<w-button-disable></w-button-disable>
 
::: details 代码用例
```html
<Button type="default" disable>默认按钮</Button>
<Button type="primary" disable>主要按钮</Button>
<Button type="success" disable>成功按钮</Button>
<Button type="info" disable>信息按钮</Button>
<Button type="warning" disable>警告按钮</Button>
<Button type="danger" disable>危险按钮</Button>
```
:::

### 图标按钮  
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<w-button-icon></w-button-icon>

::: details 代码用例
```html
<Button type="primary" icon="settings"></Button>
<Button type="primary" icon="like"></Button>
<Button type="primary" icon="share"></Button>
<Button type="primary" icon="download"></Button>
<Button type="primary" icon="delete"></Button>
```
:::

### 图标定位
可让图标左右显示。

<w-button-position></w-button-position>

::: details 代码用例
```html
<Button type="primary" icon="like" icon-position="right">点赞</Button>
<Button type="primary" icon="share" iconPosition="left">分享</Button>
```
:::

### 按钮组
以按钮组的方式出现，常用于多项类似操作。  

<w-button-group></w-button-group>

::: details 代码用例
```html
<ButtonGroup>
       <Button iconPosition="left" icon="left">左按钮</Button>
       <Button>首页</Button>
       <Button icon-position="right" icon="right">右按钮</Button>
</ButtonGroup>
<ButtonGroup>
       <Button icon="like"></Button>
       <Button icon="share"></Button>
       <Button icon="download"></Button>
</ButtonGroup>
```
:::

### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

<w-button-loading></w-button-loading>

::: details 代码用例
```html
<Button type="primary" icon="loading" disable>加载中</Button>
```
:::

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: |:-:| :-:|:-:| :-: | 
| type | 按钮显示样式 | String | default/primary/success/info/warning/danger | default |         
| disable | 禁用状态  | Boolean | -<img width=500/> | true |
| iconPosition | 图标定位 | String | left/right | left |
