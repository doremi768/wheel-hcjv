<template>
 <div class="sub-nav">
     <span @click="onClick">
        <slot name="title"></slot>
     </span>
     <div class="sub-nav-popover" v-show="open">
        <slot></slot>
     </div>
 </div>
</template>
 
<script>
export default {
    name: 'SubNav',
    data () {
        return {
            open: false
        }
    },
    methods: {
        onClick() {
            this.open = !this.open;
        }
    },
}
</script>
 
<style scoped lang = "scss">
    .sub-nav{
        position: relative;
        > span{
            padding: 10px 20px;
            display: block;
            vertical-align: top;
        }
        &-popover{
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }
    .sub-nav .sub-nav .sub-nav-popover {
        top: 0;
        left: 100%;
    }
</style>