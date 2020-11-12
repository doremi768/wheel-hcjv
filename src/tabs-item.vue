<template>
    <div class="tabs-item" :class="classes" @click="trigger">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabsItem',
    data() {
        return {
            active: false
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String | Number,
            required: true
        }
    },
    inject: ['eventBus'],
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created(){
        this.eventBus.$on('selected',(name) => {
            this.active = this.name === name;
        })
    },
    methods: {
        trigger(){
            this.eventBus.$emit('selected',this.name);
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;

        &.active{
            background: green;
        }
    }
</style>