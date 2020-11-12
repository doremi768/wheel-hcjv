<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div  class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabsHead',
    inject: ['eventBus'],
    created(){
        this.eventBus.$on('selected',(item,vm) => {
            this.$refs.line.style.width = `${vm.$el.offsetWidth}px`;
            this.$refs.line.style.transform = `translateX(${vm.$el.offsetLeft}px)`;
            
        })
    }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
    .tabs-head{
        display: flex;
        height: $tab-height;
        margin: 0 auto;
        border-bottom: 1px solid #DCDCDC;
        position: relative;
        .line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100px;
            border-bottom: 3px solid #41B883;
            transition: transform 350ms;
        }

        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>