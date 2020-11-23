<template>
 <div class="w-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
            lastSelectedIndex: undefined,
            timerId: undefined
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
        this.playAutomatically();
        this.childrenLength = this.$children.length;
    },
    updated() {
        this.updateChildren();
    },
    methods: {
        onMouseEnter() {
            this.pause();
        },
        onMouseLeave() {
            this.playAutomatically();
        },
        playAutomatically() {
            if(this.timerId) {return};
            let run = () => {
                let index = this.names.indexOf(this.getSelected());   
                let newIndex = index + 1;
                if(newIndex === -1){newIndex = this.names.length - 1};
                if(newIndex === this.names.length){newIndex = 0};
                this.select(newIndex);
                this.timerId = setTimeout(run,2000);
            }
            setTimeout(run,2000);
        },
        pause(){
            window.clearInterval(this.timerId)
            this.timerId = undefined;
        },
        select(index) {
            this.lastSelectedIndex = this.selectedIndex;
            this.$emit('update:selected',this.names[index]);
        },
        getSelected(){
            let first = this.$children[0];
            return this.selected || first.name;
        },
        updateChildren() {
            let selected = this.getSelected(); 
            this.$children.forEach((vm) => {
            let reverse = vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
            if(this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0){
                reverse = false
            }
            if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1){
                reverse = false
            }
            vm.reverse = reverse;
            this.$nextTick(() => {
                vm.selected = selected;
            })
            })   
        }
    }
}
</script>
 
<style scoped lang = "scss">
 .w-slides {
     display: inline-block;
     overflow: hidden;
     position: relative;
     width: 100%;
     &.w-slides-window{
        
     }
    .active{
         background: red;
    }
 }
</style>