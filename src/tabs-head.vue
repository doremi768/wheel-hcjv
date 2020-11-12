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
$tab-border-bottom: 1px solid #DCDCDC;
$line-border-bottom: 3px solid #41B883;
    .tabs-head{
        display: flex;
        height: $tab-height;
        margin: 0 auto;
        border-bottom: $tab-border-bottom;
        position: relative;
        .line {
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: $line-border-bottom;
            transition: transform 350ms;
        }

        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>