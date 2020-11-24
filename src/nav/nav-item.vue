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
    methods: {
        onClick() {
            this.$emit('add:selected',this.name);
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .nav-item{
        padding: 10px 20px;
        &.selected {
        background: red;
        }
    }
    
</style>