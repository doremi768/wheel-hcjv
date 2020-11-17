<template>
 <div class="cascader-item">
     {{sourceItem.name}}
     <div v-if="sourceItem.children">
        <CascaderItem  v-for="(item,index) in sourceItem.children" :key="index" :sourceItem="item">
        </CascaderItem>
     </div>
 </div>
</template>
 
<script>
export default {
    name: 'CascaderItem',
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .cascader-item{
        border: 1px solid red;
        margin: 2px;
    }
</style>