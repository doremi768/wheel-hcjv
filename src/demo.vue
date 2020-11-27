<template>
 <div class="">
     <Table :columns="columns" :dataSource="dataSource" bordered stripe @changeItem="x"></Table>
 </div>
</template>
 
<script>
import Table from './table.vue'
export default {
   components: {
       Table
   },
  data() {
      return {
          columns: [
              {text: '姓名',field: 'name'},
              {text: '分数',field: 'score'}
          ],
          dataSource: [
              {id: 1,name: 'AAA',score: 100},
              {id: 1,name: 'BBB',score: 99},
              {id: 1,name: 'CCC',score: 54},
              {id: 1,name: 'DDD',score: 76},
              {id: 1,name: 'EEE',score: 79},
              {id: 1,name: 'FFF',score: 65},
              {id: 1,name: 'GGG',score: 23}
          ]
      }
  },
  methods: {
      x(obj){
          console.log(obj)
      }
  }
   
}
</script>
 
<style scoped lang = "scss">
    .content{
        padding: 30px;
    }
</style>