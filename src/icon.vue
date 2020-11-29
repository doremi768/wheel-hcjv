<template>
    <svg class="icon" @click="$emit('click',$event)" :class="{rotate: name === 'loading'}">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './tools/svg'
export default {
    name: 'WIcon',
    props: ['name'],
} 
</script>
<style lang="scss">
  @keyframes rotate {
      0%{transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
  }
    .icon{
        margin: .2em;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
    }
.rotate{animation: rotate 1s infinite linear;} 
</style>