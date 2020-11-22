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
        width: 200px;
        height: 150px;
        background: #ccc;
        border: 1px solid red;
    }
</style>