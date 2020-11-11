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
        autoCloseDelay: {
            type: [Number,String],
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
                let timer = setTimeout(() => {
                    clearTimeout(timer);
                    this.close();
                }, this.autoCloseDelay * 1000);
        },
        updateStyles(){
            this.$nextTick(()=>{
                this.$refs.line.style.height = 
                `${this.$refs.wrapper.getBoundingClientRect().height}px`;

            })
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
@keyframes fade-in-botom{
    0% {opacity: 0; transform: translate(-50%,100%);}
    100% {opacity: 1; transform: translate(-50%,0%);}
}
@keyframes fade-in-top{
    0% {opacity: 0; transform: translate(-50%,-100%);}
    100% {opacity: 1; transform: translate(-50%,0%);}
}
@keyframes fade-in-middle{
    0% {opacity: 0;}
    100% {opacity: 1;}
}
    .toast{
        font-size: $font-size;min-height: $toast-min-height;
        display: flex;align-items: center;
        position: fixed;left: 50%;
        background: $toast-bg;color: $toast-color;border-radius: 4px;
        shadow: 0 0 3px 0px rgba(0,0,0,0.5);
        padding: 0 10px;
        //  margin: 10px;
        .message {margin: 10px 0;}

        .line{
        margin: 0 10px;
        height: 100%;
        width: 1px;
        background: #fff;
        }

        .close {flex-shrink: 0;}

        &.position-top{
            top: 0;transform: translate(-50%);
            animation: fade-in-top 1s;
            border-top-right-radius: 0;border-top-left-radius: 0;
        }
        &.position-middle{
            top: 50%;transform: translate(-50%,-50%);
            animation: fade-in-middle 1s;
        }
        &.position-bottom{
            bottom: 0%;transform: translate(-50%);
            animation: fade-in-botom 1s;
            border-bottom-right-radius: 0;border-bottom-left-radius: 0;
        }
    }

</style>