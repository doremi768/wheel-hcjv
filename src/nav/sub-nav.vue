<template>
 <div class="sub-nav" v-click-outside="close">
     <span class="title" @click="onClick" :class="{selected: open}">
        <slot name="title"></slot>
        <span class="is-icon" :class="{open}">
            <!-- <Icon v-if="open" name="left" class="icon"></Icon> -->
            <Icon name="right" class="icon"></Icon>
        </span>
     </span>
     <div class="sub-nav-popover" v-show="open">
        <slot></slot>
     </div>
 </div>
</template>
 
<script>
import clickOutside from '../tools/click-outside.js'
import Icon from '../icon.vue'
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
    components: {
        Icon
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
             position: relative;
             &:hover {
                color: $theme-color;
           }
           &.selected{
                color: $sub-nav-title-selected-color;
           }
           .is-icon {
               display: none;
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
    .sub-nav .sub-nav .is-icon {
        display: inline-flex;
        font-size: .4em;
        margin-left: 2em;
            transition: transform .5s;
            &.open {
                transform: rotate(180deg);
            }
    }
</style>