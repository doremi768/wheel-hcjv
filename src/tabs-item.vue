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
            this.eventBus.$emit('selected',this.name,this);
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs-item{
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0 2em;
        height: 100%;
        cursor: pointer;

        &.active{
            color: #41B883;
            // border-bottom: 3px solid #41B883;
        }
    }
</style>