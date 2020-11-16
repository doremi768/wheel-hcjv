<template>
 <div class="">
     <ButtonGroup>
            <Button iconPosition="left" icon="left">左按钮</Button>
            <Button>首页</Button>
            <Button icon-position="right" icon="right">右按钮</Button>
     </ButtonGroup>
     <span style=" width: 10px; height: 1px; display:inline-block;"></span>
     <ButtonGroup>
            <Button icon="like"></Button>
            <Button icon="share"></Button>
            <Button icon="download"></Button>
     </ButtonGroup>
 </div>
</template>
 
<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
export default {
    components: {Button,ButtonGroup}
}
</script>
 
<style scoped lang = "scss">
 
</style>