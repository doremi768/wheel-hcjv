<template>
 <div class="">
     <!-- {{selected}} -->
     <Table :selected-items.sync="selected" 
     :columns="columns" 
     :dataSource="dataSource" 
     bordered
     :orderBy.sync="orderBy"></Table>
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
          selected: [],
          columns: [
              {text: '姓名',field: 'name'},
              {text: '分数',field: 'score'}
          ],
          orderBy: {
              name: 'asc',
            //   score: 'desc'
          },
          dataSource: [
              {id: 1,name: 'AAA',score: 100},
              {id: 2,name: 'BBB',score: 99},
              {id: 3,name: 'CCC',score: 54},
              {id: 4,name: 'DDD',score: 76},
              {id: 5,name: 'EEE',score: 79},
              {id: 6,name: 'FFF',score: 65},
              {id: 7,name: 'GGG',score: 23}
          ]
      }
  },
  methods: {

  }
   
}
</script>
 
<style scoped lang = "scss">
    .content{
        padding: 30px;
    }
</style>