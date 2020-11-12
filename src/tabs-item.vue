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
                active: this.active,
                disabled: this.disabled
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
            if(this.disabled) {return};
            this.eventBus.$emit('selected',this.name,this);
        }
    }
}
</script>

<style lang="scss" scoped>
$active-color: #41B883;
$disabled-color: #ccc;
    .tabs-item{
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0 2em;
        height: 100%;
        cursor: pointer;
        &.active{
            color: $active-color;
        }
        &.disabled{
            color: $disabled-color;
        }
    }
</style>