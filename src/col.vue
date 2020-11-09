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
        },
        phone: {
            type: Object,
            validator(value){
                let keys = Object.keys(value);
                let valid = true;
                keys.forEach(key => {
                    if(!['span','blank'].includes(key)){
                        valid = false;
                    }
                })
                return valid;
            }
        }
    },
    data() {
        return {
            gutter: 0
            
        }
    },
    computed: {
        colClass(){
            let {span,blank,phone} = this
            return [
                `col-${span}`,
                 blank &&`blank-${blank}`,
                 phone && `col-phone-${phone.span}`
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
        $class: col-;
        width: 50%;
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
     @media(max-width: 576px) and (max-width: 768px) {
         .col{
            height: 100px;
            width: 50%;
            $class: col-phone-;
            @for $n from 1 through 12{
                &.#{$class}#{$n}{
                    width: ($n / 12) * 100%;
                }
            }
            $class: blank-phone-;
            @for $n from 1 through 12{
                &.#{$class}#{$n}{
                    margin-left: ($n / 12) * 100%;
                }
            }

        }
     }
</style>