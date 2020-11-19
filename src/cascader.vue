<template>
 <div class="cascader">
     <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
     <div class="popover" v-if="popoverVisible">
         <CascaderItems :items="source"></CascaderItems>
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
        }
    },
    data() {
        return {
            popoverVisible: false,

        }
    }
}
</script>
 
<style scoped lang = "scss">
    .cascader {
        .trigger{
            border: 1px solid red;
            width: 200px;
            height: 40px;
        }
        .popover {
            border: 1px solid red;
            width: 80px;
            height: 300px;
            display: flex;
        }
    }
</style>