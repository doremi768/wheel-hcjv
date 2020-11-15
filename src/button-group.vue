<template>
    <div class="w-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        for(let node of this.$el.children){
            if(node.nodeName.toLowerCase() !== 'button'){
                console.warn('w-button-group 的子元素应该全是 w-button');
            }
        }
    }
}
</script>

<style lang="scss">
$button-height:32px;
$font-size:14px;
$button-bg:white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: red;
    .w-button-group{
        display: inline-flex;
        vertical-align: middle;
        .w-button {
            border-radius: 0;
            margin-right: -1px;
            &:first-child{
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child{
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
   
</style>