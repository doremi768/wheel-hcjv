<template>
 <div class="cascader">
     <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
     <div class="popover-wrapper" v-if="popoverVisible">
         <CascaderItems :items="source" class="popover" :height="popoverHeight" :selected="selected"
         @update:selected="onUpdateSelected"></CascaderItems>
     </div>
 </div>
</template>
 
<script>
import CascaderItems from './cascader-items'
export default {
    name: 'cascader',
    components: {CascaderItems},
    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        },
        selected: {
            type: Array,
            default: () => {return []}
        }
    },
    data() {
        return {
            popoverVisible: false,

        }
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected',newSelected)
            console.log(newSelected);
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .cascader {
        position: relative;
        .trigger{
            border: 1px solid red;
            width: 200px;
            height: 40px;
        }
        .popover-wrapper {
            position: absolute; background-color: #fff;display: flex;
            box-shadow: 0 0 5px rgba(0,0,0,0.15);
            border-radius: 5px;
        }
    }
</style>