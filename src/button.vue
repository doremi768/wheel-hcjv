<template>
    <div>
        <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
            <w-icon v-if="icon" :name="icon" class="icon"></w-icon>
            <!-- <svg class="icon">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg> -->
            <div class="content">
                 <slot/>
            </div>
        </button>
    </div>
</template>

<script>
export default {
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
 .w-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover{border-color: var(--border-color-hover);}
        &:active{background-color: var(--button-active-bg);}
        &:focus{outline: none;}

        > .icon{order: 1; margin-right: .3em}
        > .content{order: 2;}

        &.icon-right{
            > .icon{order: 2; margin-left: .3em; margin-right: 0}
            > .content{order: 1}
        }
        
    }
        
</style>