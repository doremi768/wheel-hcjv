<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        gutter: {
            type: [Number,String]
        },
        align: {
            type: String,
            validator(value){
                return ['left','right','center'].includes(value);
            }
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutterssss = this.gutter;
        })
    },
    computed: {
        rowStyle() {
            return {
                marginLeft: this.gutter/2 + 'px',
                marginRight: this.gutter/2 + 'px'
            }
        },
        rowClass(){
            return [this.align && `align-${this.align}`]
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
</style>