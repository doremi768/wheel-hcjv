<template>
 <div class="sub-nav">
     <span @click="onClick" class="title">
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
@import '../../public/css/nav.scss';

    .sub-nav{
        position: relative;
        background: $sub-nav-bg-color;
         .title {
             &:hover {
                color: $theme-color;
             }
        }
        > span{
            padding: $padding;
            display: block;
            vertical-align: top;
        }
        &-popover{
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: $popover-margin-top;
            /* border: $popover-border; */
            box-shadow: $popover-box-shadow;
            white-space: nowrap;
            min-width: $popover-min-width;
            border-radius: $popover-border-radius;
        }
    }
    .sub-nav .sub-nav .sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: $children-popover-margin-left;
    }
   
</style>