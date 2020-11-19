<template>
 <div class="cascader-item" :style="{'height': height}">
    <div class="left">
        <div class="label" v-for="(item,index) in items" :key="index" @click="leftSelected = item">
            {{item.name}}
        </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-items :items="rightItems" :height="height"></cascader-items>
    </div>
 </div>
</template>
 
<script>
export default {
    name: 'CascaderItems',
    props: {
        items: {
            type: Array
        },
        height: {
            type: String
        }
    },
    mounted(){
        console.log(this.height);
        
    },
    data(){
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems() {
            if(this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    }
}
</script>
 
<style scoped lang = "scss">
    .cascader-item{
        display: flex;
        white-space: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        .left {
            border: 1px solid red;
            height: 100%;
        }
        .right {
            height: 100%;
        }
    }
</style>