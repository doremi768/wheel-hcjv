<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'tabs',
    props: {
        selected: {
            type: String,
            default: undefined
        },
        direction: {
            type: String,
            default: 'across',
            validator(value){
                return ['across','vertical'].includes(value);
            }
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        if(this.$children.length === 0){
            console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav');
        }
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'tabsHead'){
                vm.$children.forEach((childVm)=>{
                    if(childVm.$options.name === 'tabsItem' && childVm.name === this.selected){
                        this.eventBus.$emit('selected',this.selected,childVm);
                    }
                })
            }
            
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>