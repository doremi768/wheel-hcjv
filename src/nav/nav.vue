<template>
 <div class="nav" :class="{vertical}">
     <slot></slot>
 </div>
</template>
 
<script>
export default {
    name: 'Nav',
    props: {
        selected: {
            type: String,
            default: undefined
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            items: []
        }
    },
    provide() {
        return {
            root: this,
            vertical: this.vertical
        }
    },
    mounted() {
        this.updateChildren();
        this.listenToChlidren();
    },
    updated(){
        this.updateChildren();
    },
   
    methods:{
        addItems(vm) {
            this.items.push(vm);
        },
        updateChildren() {
            this.items.forEach((vm) => {
                if(this.selected === vm.name) {
                    vm.selected = true;
                } else {
                    vm.selected = false;
                }
            })
        },
        listenToChlidren() {
            this.items.forEach((vm) => {
                vm.$on('update:selected',(name)=>{
                    this.$emit('update:selected',name)
                })
            })
        }
    }
   
}
</script>
 
<style scoped lang = "scss">
@import '../../public/css/nav.scss';
    .nav{
        display: flex;
        border-bottom: $nav-border-bottom;
        cursor: pointer;
        color: $default-color;
        &.vertical{
            flex-direction: column;
            border: 1px solid #ccc;
        }
    }
</style>