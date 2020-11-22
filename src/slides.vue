<template>
 <div class="w-slides">
     <div class="w-slides-window">
        <slot></slot>
     </div>
 </div>
</template>
 
<script>
export default {
    props: {
        selected: {
            type: String,
        },
        autoPlay: {
            type: Boolean,
            default: true
        }
    },
     mounted() {
        this.updateChildren();
        this.automatically();
    },
    updated() {
        this.updateChildren();
    },
    methods: {
        updateChildren() {
            let selected = this.getSelected(); 
            this.$children.forEach((vm) => {
            vm.selected = selected;
            })   
        },
        automatically() {
            const names = this.$children.map((vm) => vm.name);
            let index = names.indexOf(this.getSelected());   
            setInterval(() => {
                if(index === names.length){index = 0};
                this.$emit('update:selected',names[index+1])   
                index++;      
            },2000)
        },
        getSelected(){
            let first = this.$children[0];
            return this.selected || first.name;
        }
    }
}
</script>
 
<style scoped lang = "scss">
 .w-slides {
     border: 1px solid green;
     display: inline-block;
     overflow: hidden;
     position: relative;
     &.w-slides-window{

     }
 }
</style>