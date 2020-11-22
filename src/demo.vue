<template>
 <div class="">
     <w-button >aa</w-button>
     <w-Cascader :selected.sync="selected" :source="source"></w-Cascader>
 </div>
</template>
 
<script>
import Button from './button'
import Cascader from './cascader'
export default {
   components: {
       'w-button': Button,
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