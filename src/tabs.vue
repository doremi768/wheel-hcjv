<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'across',
            validator(value){
                return ['across','vertical'].includes(value);
            }
        }
    },
    created(){
        // this.$emit('update:selected','xxx')
    }
}
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>