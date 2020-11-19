<template>
 <div class="cascader-item" :style="{'height': height}">
     <div>
     
     </div>
    <div class="left">
        <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
            {{item.name}}
            <span v-if="item.children" style="color: #B8B8B8;">></span>
        </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-items :items="rightItems" :height="height" :selected="selected"
        :level="level+1" @update:selected="onUpdateSlected"></cascader-items>
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
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type:Number,
            default: 0
        }
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level];
            if(currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected));
            copy[this.level] = item;
            copy.splice(this.level + 1);
            this.$emit('update:selected',copy)
        },
        onUpdateSlected(selected){
            this.$emit('update:selected',selected)
        }
    }
}
</script>
 
<style scoped lang = "scss">
@import 'var';
    .cascader-item{
        display: flex;
        white-space: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        font-size: $font-size;
        .left {
            height: 100%;
        }
        .right {
            height: 100%;
            border-left: $border-left;
        }
        .label {
            padding: $padding;
        }
    }
</style>