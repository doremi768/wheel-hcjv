<template>
 <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
        <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
        <slot></slot>
    </span>
 </div>
</template>
 
<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    methods: {
        xxx(){
            this.visible = !this.visible;
            if(this.visible === true){
                this.$nextTick(()=>{
                    document.body.appendChild(this.$refs.contentWrapper)
                    let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
                    let eventHandler = () => {
                        this.visible = false;
                        document.removeEventListener('click',eventHandler)             
                    }
                    document.addEventListener('click',eventHandler);
                })                    
            }
        }
    },
    mounted(){
        console.log(this.$refs.triggerWrapper);
    }
}
</script>
 
<style scoped lang = "scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        height: 100%;
    }
    .content-wrapper{
        position:  absolute; 
        transform: translateY(-100%);
     }
</style>