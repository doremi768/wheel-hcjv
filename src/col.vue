<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: [Number,String]
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        background: grey;
        width: 50%;
        border: 1px solid red;

        $class: col-;
        @for $n from 1 through 12{
            &.#{$class}#{$n}{
                width: ($n / 12) * 100%;
            }
        }
        
     }
       
</style>