<template>
 <div class="">
     <WSlides :selected.sync="selected">
         <WSlidesItem name="1">
            <div class="box">1</div>
         </WSlidesItem>
         <WSlidesItem name="2">
            <div class="box">2</div>
         </WSlidesItem>
         <WSlidesItem name="3">
            <div class="box">3</div>
         </WSlidesItem>
     </WSlides>
 </div>
</template>
 
<script>
import WSlides from './slides'
import WSlidesItem from './slides-item'
export default {
   components: {
       WSlides,WSlidesItem
   },
   data(){
       return {
           selected: '1'
       }
   },
   created() {
   }
}
</script>
 
<style scoped lang = "scss">
    .box {
        width: 100%;
        height: 350px;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
</style>