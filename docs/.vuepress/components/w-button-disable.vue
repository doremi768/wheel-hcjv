<template>
 <div class="">
        <Button type="default" disable>默认按钮</Button>
        <Button type="primary" disable>主要按钮</Button>
        <Button type="success" disable>成功按钮</Button>
        <Button type="info" disable>信息按钮</Button>
        <Button type="warning" disable>警告按钮</Button>
        <Button type="danger" disable>危险按钮</Button>
 </div>
</template>
 
<script>
import Button from '../../../src/button/button'
export default {
    components: {Button}
}
</script>
 
<style scoped lang = "scss">
 
</style>