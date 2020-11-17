<template>
 <div class="cascader">
     <div class="triggler">
        <slot></slot>
     </div>
     <div class="popover">
         <div v-for="(item,index) in Source" :key="index">
             <cascader-item :sourceItem="item"></cascader-item>
         </div>
     </div>
 </div>
</template>
 
<script>
import CascaderItem from './cascader-item'
export default {
    name: 'cascader',
    components: {
        CascaderItem
    },
    props: {
        Source: {
            type: Array
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .cascader {
        width: 500px;
        height: 600px;
    }
</style>