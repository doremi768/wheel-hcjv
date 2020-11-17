# Grid 栅格
通过基础的 12 分栏栅格系统，迅速简便地创建布局。

## 引入
```js
import {Row,Col} from 'wheel-hcjv';
Vue.component(Row);
Vue.component(Col);
```

## 例子
### 基础布局
使用单一分栏创建基础的栅格布局。

<w-grid></w-grid>

> 通过行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。使用 row 和 col 组件，并通过 col 组件的 span 属性就可以自由地组合布局。

::: details 代码用例
```html
<Row class="row">
    <Col span="12">100%</Col>
</Row>
<Row class="row">
    <Col span="3">25%</Col>
    <Col span="3">25%</Col>
    <Col span="3">25%</Col>
    <Col span="3">25%</Col>
</Row>
<Row class="row">
    <Col span="4">33.3%</Col>
    <Col span="4">33.3%</Col>
    <Col span="4">33.3%</Col>
</Row>
<Row class="row">
    <Col span="6">50%</Col>
    <Col span="6">50%</Col>
</Row>
<Row class="row">
    <Col span="8">66.6%</Col>
    <Col span="4">33.3%</Col>
</Row>
```
:::

### 空格分栏
通过 `blank` 属性更好的自由组合布局。

<w-grid-blank></w-grid-blank>

::: details 代码用例
```html
<Row class="row">
    <Col span="3">col-3</Col>
    <Col span="2" blank="1">col-2</Col>
    <Col span="3">col-3</Col>
    <Col span="2" blank="1">col-2</Col>
</Row>
<Row class="row">
    <Col span="3">col-3</Col>
    <Col span="3" blank="2">col-3</Col>
    <Col span="2"  blank="2">col-2</Col>
</Row>
```
:::

### 对齐方式
通过 `align` 属性快速设置对齐方式来对分栏进行灵活的对齐。

<w-grid-align></w-grid-align>

::: details 代码用例
```html
<Row class="row" align="left">
    <Col span="6">col-6</Col>
    <Col span="3">col-3</Col>
</Row>
<Row class="row" align="center">
    <Col span="6">col-6</Col>
    <Col span="3">col-3</Col>
</Row>
<Row class="row" align="right">
    <Col span="6">col-6</Col>
    <Col span="3">col-3</Col>
</Row>
```
:::

### 分栏间隔
分栏之间存在一定间距

<w-grid-gutter></w-grid-gutter>

::: details 代码用例
```html
<Row class="row" :gutter="10">
    <Col span="3">col-3</Col>
    <Col span="3">col-3</Col>
    <Col span="3">col-3</Col>
    <Col span="3">col-3</Col>
</Row>
<Row class="row" :gutter="10">
    <Col span="4">col-4</Col>
    <Col span="4">col-4</Col>
    <Col span="4">col-4</Col>
</Row>
<Row class="row" :gutter="10">
    <Col span="6">col-6</Col>
    <Col span="6">col-6</Col>
</Row>
```
:::

### 响应式布局
目前只设计了设置 `phone` 属性实现响应式布局，当浏览器尺寸小于 576px 时，对布局进行改变。

<w-grid-phone></w-grid-phone>

> 调整浏览器尺寸来查看效果。

::: details 代码用例
```html
<Row class="row">
    <Col span="4" :phone="{span: 2}">col-4/col2</Col>
    <Col span="4" :phone="{span: 8}">col-4>/col-8</Col>
    <Col span="4" :phone="{span: 2}">>col-4/col-2</Col>
</Row>
```
:::

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: |:-:| :-:|:-:| :-: | 
| span | 栅格的占位格数 | String/Number | 可选值为0~12的整数 | -<img width=200/> |         
| blank | 栅格的占位符  |  String/Number | 可选值为0~12的整数 | - |
| phone | 响应式栅格属性对象 | Object | - | - |
| align | 栅格对齐方式(作用于Row) | String | left/center/right | left |
| gutter | 栅格之间的间隔(作用于Row) | String/Number | - | - |