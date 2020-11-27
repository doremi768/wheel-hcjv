<template>
    <svg class="icon" @click="$emit('click',$event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './tools/svg'
export default {
    props: ['name'],
    
} 
</script>
<style lang="scss">
    .icon{
        margin: .2em;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
    }
</style>