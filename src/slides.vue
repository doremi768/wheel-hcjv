<template>
 <div class="w-slides">
     <div class="w-slides-window">
        <slot></slot>
     </div>
     <div class="w-dots">
         <span v-for="(n,index) in childrenLength" :key="index" 
         :class="{active: selectedIndex === n-1}" @click="select(n - 1)">
             {{n}}
         </span>
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
    data() {
        return {
            childrenLength: 0,
            lastSelectedIndex: undefined
        }
    },
    computed: {
        names() {
            return this.$children.map((vm) => vm.name);
        },
        selectedIndex() {
            return this.names.indexOf(this.selected) || 0;
        },
    },
     mounted() {
        this.updateChildren();
        this.automatically();
        this.childrenLength = this.$children.length;
    },
    updated() {
        this.updateChildren();
    },
    methods: {
        updateChildren() {
            let selected = this.getSelected(); 
            this.$children.forEach((vm) => {
            vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
            this.$nextTick(() => {
                vm.selected = selected;
            })
            })   
        },
        automatically() {
            let index = this.names.indexOf(this.getSelected());   
            let run = () => {
                let newIndex = index - 1;
                if(newIndex === -1){newIndex = this.names.length - 1};
                if(newIndex === this.names.length){newIndex = 0};
                this.select(newIndex);
                setTimeout(run,2000);
            }
            // setTimeout(run,2000);
        },
        select(index) {
            this.lastSelectedIndex = this.selectedIndex;
            this.$emit('update:selected',this.names[index]);
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
    .active{
         background: red;
    }
 }
</style>