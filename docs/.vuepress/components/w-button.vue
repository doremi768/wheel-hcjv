<template>
 <div class="">
        <w-button type="default">默认按钮</w-button>
        <w-button type="primary">主要按钮</w-button>
        <w-button type="success">成功按钮</w-button>
        <w-button type="info">信息按钮</w-button>
        <w-button type="warning">警告按钮</w-button>
        <w-button type="danger">危险按钮</w-button>
 </div>
</template>
<script>
import Button from '../../../src/button'
export default {
    components: {
        'w-button': Button
    }
}
</script>
 