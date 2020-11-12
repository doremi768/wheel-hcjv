<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
export default {
    props: ['name']
}
</script>
<style lang="scss">
    .icon{
        margin: .2em;
        width: 1em;
        height: 1em;
        vertical-align: middle;
    }
</style>