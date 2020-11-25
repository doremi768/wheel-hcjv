<template>
 <div class="sub-nav" v-click-outside="close">
     <span class="title" @click="onClick" :class="{selected: open}">
        <slot name="title"></slot>
     </span>
     <div class="sub-nav-popover" v-show="open">
        <slot></slot>
     </div>
 </div>
</template>
 
<script>
import clickOutside from '../tools/click-outside.js'
export default {
    name: 'SubNav',
    data () {
        return {
            open: false,
        }
    },
    directives: {'click-outside':clickOutside},
    props: {
        name: {
            type: String,
            required: true
        },
    },
    created() {
    },
    methods: {
        onClick() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
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
           &.selected{
                color: $sub-nav-title-selected-color;
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