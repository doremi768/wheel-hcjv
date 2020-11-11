<template>
    <div class="tabs-head">
        <slot></slot>
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
        
    }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
    .tabs-head{
        display: flex;
        align-items: center;
        height: $tab-height;
        margin: 0 auto;
        border: 1px solid red;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>