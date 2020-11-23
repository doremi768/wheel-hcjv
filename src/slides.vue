<template>
 <div class="w-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
     <div class="w-slides-window">
        <slot></slot>
     </div>
     <div class="w-dots">
         <span @click="onClickPrev">&lt;</span>
         <span v-for="(n,index) in childrenLength" :key="index" 
         :class="{active: selectedIndex === n-1}" @click="select(n - 1)">
             {{n}}
         </span>
         <span @click="onClickNext">&gt;</span>
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
            return this.items.map((vm) => vm.name);
        },
        selectedIndex() {
            let index = this.names.indexOf(this.selected);
            return index === -1 ? 0 : index;
        },
        items() {
            return this.$children.filter(vm => vm.$options.name === 'SlidesItem')
        }
    },
     mounted() {
        this.updateChildren();
        this.playAutomatically();
        this.childrenLength = this.items.length;
    },
    updated() {
        this.updateChildren();
    },
    methods: {
        onClickPrev() {
            this.select(this.selectedIndex - 1)
        },
        onClickNext() {
            this.select(this.selectedIndex + 1)
        },
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
                this.select(newIndex);
                this.timerId = setTimeout(run,4000);
            }
            this.timerId = setTimeout(run,4000);
        },
        pause(){
            window.clearTimeout(this.timerId)
            this.timerId = undefined;
        },
        select(newIndex) {
            this.lastSelectedIndex = this.selectedIndex;
            if(newIndex === -1){newIndex = this.names.length - 1};
            if(newIndex === this.names.length){newIndex = 0};
            this.$emit('update:selected',this.names[newIndex]);
        },
        getSelected(){
            let first = this.items[0];
            return this.selected || first.name;
        },
        updateChildren() {
            let selected = this.getSelected(); 
            this.items.forEach((vm) => {
            let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
            
            // if(this.timerId) {
                 if(this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0){
                    reverse = false
                 }
                if(this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1){
                    reverse = true
                // }
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
     text-align: center;
     .w-dots {
         padding: 8px 0;
         display: flex;
         justify-content: center;
         align-items: center;
         > span {
             width: 1.2em;
             height: 1.2em;
             display: inline-flex;
             justify-content: center;
             align-items: center;
             background: #ddd;
             border-radius: 50%;
             margin: 0.2em;
             &.active{
                 background: red;
            }
         
    }
     }
    
 }
</style>