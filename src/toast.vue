<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
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
                    callback: (toast) => {
                        toast.close();
                    }
                }
            }
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(() => {
                this.close();
            }, this.autoCloseDelay * 1000);
        }
    },
    methods: {
        close(){
            this.$el.remove();
            this.$destroy();
        },
        onClickClose(){
            this.close();
            this.closeButton.callback();
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
$toast-color: #fff;
    .toast{
        font-size: $font-size;height: $toast-height;
        position: fixed;top: 0;left: 50%;transform: translate(-50%);
        display: flex;align-items: center;
        background: $toast-bg;color: $toast-color;border-radius: 4px;
        shadow: 0 0 3px 0px rgba(0,0,0,0.5);
        padding: 0 16px;
    }
    .line{
        margin: 0 10px;
        height: 40px;
        width: 1px;
        height: 100px;
        background: #fff;
    }
</style>