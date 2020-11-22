<template>
 <div class="">
     <w-Cascader :selected.sync="selected" :source="source"></w-Cascader>
 </div>
</template>
 
<script>
import Cascader from './cascader'
export default {
   components: {
       'w-Cascader': Cascader
   },
   data() {
       return {
           source: [
                 {
                     name: '四川',
                     children: [
                         {name:'成都'},
                         {name:'内江'},
                         {name:'雅安'},
                     ]
                 }
             ],
             selected: []
       }
   }
}
</script>
 
<style scoped lang = "scss">
 
</style>