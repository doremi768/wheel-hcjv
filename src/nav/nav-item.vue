<template>
 <div class="nav-item" :class="{selected,vertical}" @click="onClick" :data-name="name">
     <slot></slot>
 </div>
</template>
 
<script>
export default {
    name: 'NavItem',
    data () {
        return {
            selected: false
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
    },
    inject: ['root','vertical'],
    created() {
        this.root.addItems(this);
    },
    methods: {
        onClick() {
            this.$emit('update:selected',this.name);
        }
    }
}
</script>
 
<style scoped lang = "scss">
/*common*/
$padding: 10px 20px;
$theme-color: #41B883;
$default-color: #7C7C7C;
/*nav*/
$nav-border-bottom: 1px solid #DCDCDC;
$nav-item-border-bottom-size: 1px;

    .nav-item{
        padding: $padding;
        &:hover {
            color:$theme-color;
        }
        &.selected {
        position: relative;
        color: $theme-color;
        &::after{
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: $nav-item-border-bottom-size;
            background-color: $theme-color;
            }
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        &.vertical{
            &.selected {
                color: $theme-color;
                &::after {
                    display: none;
                }
            }
        }
    }
    .sub-nav .nav-item {
        &:hover {
            color: $theme-color;
        }
        &.selected {
            color: $theme-color;
            &::after {
                display: none;
            }
        }
    }
</style>