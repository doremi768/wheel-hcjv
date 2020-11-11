<template>
    <div class="tabs-panel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabsPanel',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            required: true
        }
    },
    created(){
        this.eventBus.$on('selected',(name) => {
            console.log(name);
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs-panel{

    }
</style>