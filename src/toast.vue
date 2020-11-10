<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line" v-if="closeButton"></div>
        <span v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 2
        },
        closeButton: {
            type: Object
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value){
                return ['top','bottom','middle'].includes(value);
            }
        }
    },
    mounted(){
        this.closeButton ? this.updateStyles() : this.execAutoClose();
    },
    computed: {
        toastClasses(){
            return {
                [`position-${this.position}`]: true
            };
        }
    },
    methods: {
        execAutoClose(){
            if(this.autoClose){
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },
        updateStyles(){
            this.$nextTick(()=>{
                this.$refs.line.style.height = 
                `${this.$refs.wrapper.getBoundingClientRect().height}px`;
            },0)
        },
        close(){
            this.$el.remove();
            this.$emit('close');
            this.$destroy();
        },
        onClickClose(){
            this.close();
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback(this);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
$toast-color: #fff;
@keyframes fade-in{
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1; transform: translateY(0%);}
}
    .toast{
        animation: fade-in 1s;
        font-size: $font-size;min-height: $toast-min-height;
        display: flex;align-items: center;
        position: fixed;left: 50%;
        background: $toast-bg;color: $toast-color;border-radius: 4px;
        shadow: 0 0 3px 0px rgba(0,0,0,0.5);
        padding: 0 10px; margin: 10px;
        .message {margin: 10px 0;}

        .line{
        margin: 0 10px;
        height: 100%;
        width: 1px;
        background: #fff;
        }

        .close {flex-shrink: 0;}

        &.position-top{top: 0;transform: translate(-50%);}
        &.position-middle{top: 50%;transform: translate(-50%,-50%);}
        &.position-bottom{bottom: 0%;transform: translate(-50%);}
    }

</style>