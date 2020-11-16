# Button 按钮
按钮，提供几种基础样式和尺寸，可自定义图标。

### 引入

```js
import { Button } from 'wheel-hcjv';

Vue.component(Button.name, Button);
```

### 例子
改变颜色

<w-button></w-button>

```html
<w-button type="default">默认按钮</w-button>
<w-button type="primary">主要按钮</w-button>
<w-button type="success">成功按钮</w-button>
<w-button type="info">信息按钮</w-button>
<w-button type="warning">警告按钮</w-button>
<w-button type="danger">危险按钮</w-button>
```