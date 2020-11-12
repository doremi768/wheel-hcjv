<template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabsPanel',
    inject: ['eventBus'],
    data() {
        return {
            active: false
        }
    },
    props: {
        name: {
            type: String | Number,
            required: true
        }
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    mounted(){
        this.eventBus.$on('selected',(name) => {
            this.active = this.name === name;
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs-panel{
        &.active{
            background: green;
        }
    }
</style>