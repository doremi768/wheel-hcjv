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
            // required: true
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
    created(){
    }
}
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>