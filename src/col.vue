<template>
    <div class="col" 
    :class="[`col-${span}`, blank &&`blank-${blank}`]"
    :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid green; height: 100px;">
        <slot></slot>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: [Number,String]
        },
        blank: {
            type: [Number,String]
        }
    },
    data() {
        return {
            gutter: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        width: 50%;
        $class: col-;
        @for $n from 1 through 12{
            &.#{$class}#{$n}{
                width: ($n / 12) * 100%;
            }
        }
        $class: blank-;
         @for $n from 1 through 12{
            &.#{$class}#{$n}{
                margin-left: ($n / 12) * 100%;
            }
        }
       
     }
</style>