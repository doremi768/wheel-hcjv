<template>
 <div class="collapse">
     <slot></slot>
 </div>
</template>
 
<script>
import Vue from 'vue'
export default {
    data () {
        return {
            eventBus: new Vue(),
        }
    },
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: String,
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        console.log(this.selected);
        
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:selected',(name) => {
            this.$emit('update:selected',name)
        })
        this.$children.forEach((vm) => {
            vm.single = this.single;
        })
    }
}
</script>
 
<style scoped lang = "scss">
$grey: #ddd;
$border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>