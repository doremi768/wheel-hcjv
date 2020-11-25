<template>
 <div class="nav-item" :class="{selected}" @click="onClick">
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
    inject: ['root'],
    created() {
        
        this.root.addItems(this);
    },
    methods: {
        onClick() {
            this.$emit('add:selected',this.name);
        }
    }
}
</script>
 
<style scoped lang = "scss">
@import '../../public/css/nav.scss';

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