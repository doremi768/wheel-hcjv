<template>
        <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
            <w-icon v-if="icon" :name="icon" class="icon" :class="{rotate: icon == 'loading'}"></w-icon>
            <div class="content">
                 <slot/>
            </div>
        </button>
</template>

<script>
import Icon from './icon'
export default {
    components: {
        'w-icon': Icon
    },
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator(value){
                return value === 'left' || value === 'right';
            }
        }
    }
}
</script>

<style lang="scss">
$button-height:32px;
$font-size:14px;
$button-bg:white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: red;
  @keyframes rotate {
      0%{transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
  }
 .w-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        font: inherit;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{border-color: $border-color-hover;}
        &:active{background-color: $button-active-bg;}
        &:focus{outline: none;}

        > .icon{order: 1; margin-right: .3em}
        > .content{order: 2;}

        &.icon-right{
            > .icon{order: 2; margin-left: .3em; margin-right: 0}
            > .content{order: 1}
        }

        .rotate{
            animation: rotate 1s infinite linear;
        } 
    }
        
</style>