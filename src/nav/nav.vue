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
        }
    },
    computed: {
        item() {
            return this.$children.filter((vm) => {return vm.$options.name === 'NavItem'});
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
        updateChildren() {
            this.item.forEach((vm) => {
                if(this.selected.indexOf(vm.name) >= 0) {
                    vm.selected = true;
                } else {
                    vm.selected = false;
                }
            })
        },
        listenToChlidren() {
            this.item.forEach((vm) => {
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
    .nav{
        display: flex;
        border: 1px solid red;
    }
</style>