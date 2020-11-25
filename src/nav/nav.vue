<template>
 <div class="nav">
     <slot></slot>
 </div>
</template>
 
<script>
export default {
    name: 'Nav',
    props: {
        selected: {
            type: Array,
            default: () => {}
        },
        multiple: {
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
            root: this
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
                if(this.selected.indexOf(vm.name) >= 0) {
                    vm.selected = true;
                } else {
                    vm.selected = false;
                }
            })
        },
        listenToChlidren() {
            this.items.forEach((vm) => {
                vm.$on('add:selected',(name)=>{
                    if(this.multiple){
                        if(this.selected.indexOf(vm.name) < 0) {
                            let copy = JSON.parse(JSON.stringify(this.selected));
                            copy.push(name);
                            this.$emit('update:selected',copy);
                        }
                    } else {
                        this.$emit('update:selected',[name])
                    }
                    
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
    }
</style>