<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
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
    },
    computed: {
        colClass(){
            let {span,blank} = this
            return [
                `col-${span}`,
                 blank &&`blank-${blank}`
            ]
        },
        colStyle(){
            return {
                paddingLeft: this.gutter/2 + 'px',
                paddingRight: this.gutter/2 + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        // width: 50%;
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