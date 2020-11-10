<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
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
            default: 60
        },
        closeButton: {
            type: Object,
            default: ()=>{
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        this.updateStyles();
        this.execAutoClose();
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
            this.$destroy();
        },
        onClickClose(){
            this.close();
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback(this);
            }
        },
        log() {
            console.log(1);
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
$toast-color: #fff;
    .toast{
        font-size: $font-size;min-height: $toast-min-height;
        position: fixed;top: 0;left: 50%;transform: translate(-50%);
        display: flex;align-items: center;
        background: $toast-bg;color: $toast-color;border-radius: 4px;
        shadow: 0 0 3px 0px rgba(0,0,0,0.5);
        padding: 0 10px;

        .message {
            margin: 10px 0;
        }
        .line{
        margin: 0 10px;
        height: 100%;
        width: 1px;
        background: #fff;
        }

        .close {
            flex-shrink: 0;
        }
    }
    
</style>