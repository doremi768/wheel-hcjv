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
            required: true
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
        
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'tabsHead'){
                vm.$children.forEach((item)=>{
                    if(item.$options.name === 'tabsItem' && item.name === this.selected){
                        this.eventBus.$emit('selected',this.selected,item);
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