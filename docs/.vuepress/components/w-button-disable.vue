<template>
 <div class="">
        <w-button type="default" disable>默认按钮</w-button>
        <w-button type="primary" disable>主要按钮</w-button>
        <w-button type="success" disable>成功按钮</w-button>
        <w-button type="info" disable>信息按钮</w-button>
        <w-button type="warning" disable>警告按钮</w-button>
        <w-button type="danger" disable>危险按钮</w-button>
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
 
<style scoped lang = "scss">
 
</style>