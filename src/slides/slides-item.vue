<template>
     <transition name="slide">
        <div class="w-slides-window" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
     </transition>
</template>
 
<script>
export default {
    name: 'SlidesItem',
    data() {
        return {
            selected: undefined,
            reverse: false
        }
    },
    props: {
        name: String,
        required: true
    },
    computed: {
        visible(){
            return this.selected === this.name
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .slide-leave-active{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 2s;
    }
    .slide-enter{
        transform: translateX(100%);
    }
     .slide-leave-to{
        transform: translateX(-100%) scale(0.5);
        
    }
    .slide-enter.reverse{
        transform: translateX(-100%);
    }
     .slide-leave-to.reverse{
        transform: translateX(100%) scale(0.5);
    }
</style>