<template>
 <div class="sub-nav" v-click-outside="close">
    <span class="title" @click="onClick" :class="{selected: open}">
        <slot name="title"></slot>
        <span class="is-icon" :class="{open,vertical}">
            <Icon name="right" class="icon"></Icon>
        </span>
    </span>
    <template v-if="!vertical">
        <div class="sub-nav-popover" v-show="open" :class="{vertical}">
                <slot></slot>
        </div>
    </template>
    <template  v-else>
        <transition v-on:enter="enter" v-on:after-enter="afterEnter" v-on:leave="leave"  v-on:after-leave="afterLeave">
            <div class="sub-nav-popover" v-show="open" :class="{vertical}">
                <slot></slot>
            </div>
        </transition>
    </template>
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
    inject: ['root','vertical'],
    directives: {'click-outside':clickOutside},
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    components: {
        Icon
    },
    methods: {
        onClick() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
        },
        enter(el,done) {
            let {height} = el.getBoundingClientRect();
            el.style.height = 0;
            el.getBoundingClientRect()
            el.style.height = `${height}px`;
            el.addEventListener('transitionend',() => {
                done();
            })
        },
        afterEnter(el) {
            el.style.height = 'auto'
        },
        leave(el,done) {
            let {height} = el.getBoundingClientRect();
            el.style.height = `${height}px`;
            el.getBoundingClientRect()
            el.style.height = 0;
            el.addEventListener('transitionend',() => {
                done();
            })
        },
        afterLeave(el) {
            el.style.height = 'auto'
        },
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
                display: inline-flex;
                font-size: .4em;
                margin-left: 2em;
                transition: transform .5s;
                &.open {
                transform: rotate(180deg);
                }
                 &.vertical{
                    float: right;
                    margin-top: 1em;
                    transform: rotate(90deg);
                    &.open {
                    transform: rotate(270deg);
                }
        }
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
            box-shadow: $popover-box-shadow;
            white-space: nowrap;
            min-width: $popover-min-width;
            border-radius: $popover-border-radius;
            &.vertical {
                position: static;
                border-radius: 0;
                border: none;
                box-shadow: none;
                padding-left: $vertical-padding-left;
                overflow: hidden;
                transition: height .5s;
            }
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
        &.vertical{
            float: right;
            margin-top: 1em;
            transform: rotate(90deg);
            &.open {
                transform: rotate(270deg);
            }
        }
    }
</style>