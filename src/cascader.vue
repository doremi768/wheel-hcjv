<template>
 <div class="cascader">
     <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
     <div class="popover-wrapper" v-if="popoverVisible">
         <CascaderItems :items="source" class="popover" :height="popoverHeight"></CascaderItems>
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
        }
    },
    mounted(){
        console.log(this.popoverHeight);
        
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
        position: relative;
        .trigger{
            border: 1px solid red;
            width: 200px;
            height: 40px;
        }
        .popover {
            position: absolute;
            border: 1px solid green;
            background-color: #fff;
            /* height: 300px; */
            display: flex;
        }
    }
</style>