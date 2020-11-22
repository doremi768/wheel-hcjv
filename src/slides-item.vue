<template>
     <transition name="slide">
        <div class="w-slides-window" v-if="visible">
            <slot></slot>
        </div>
     </transition>
</template>
 
<script>
export default {
    data() {
        return {
            selected: undefined
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
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 1s;
    }
    .slide-enter{
        transform: translateX(100%);
    }
     .slide-leave-to{
        transform: translateX(-100%);
    }
</style>