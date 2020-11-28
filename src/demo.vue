<template>
 <div class="">
     <!-- {{selected}} -->
     <Table :selected-items.sync="selected" 
     :columns="columns" 
     :dataSource="dataSource" 
     :orderBy.sync="orderBy"
     :loading="loading"
     bordered
     @update:orderBy="abc"
     height="400"
     expend-field="description"
     numberVisible>
        <template>
            <button>查看</button>
            <button>编辑</button>
        </template>
     </Table>
     <Table :selected-items.sync="selected" 
     :columns="columns" 
     :dataSource="dataSource" 
     :orderBy.sync="orderBy"
     :loading="loading"
     bordered
     @update:orderBy="abc"
     height="400"
     expend-field="description"
     numberVisible>
     </Table>
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
          loading: false,
          selected: [],
          columns: [
              {text: '姓名',field: 'name',width: '500'},
              {text: '分数',field: 'score'}
          ],
          orderBy: {
              name: 'asc',
            //   score: 'desc'
          },
          dataSource: [
              {id: 1,name: 'AAA',score: 100,description: 'xxxxxxxxxxxx'},
              {id: 2,name: 'BBB',score: 99,description: 'xxxxxxxxxxxx'},
              {id: 3,name: 'CCC',score: 54},
              {id: 4,name: 'DDD',score: 76},
              {id: 5,name: 'EEE',score: 79},
              {id: 6,name: 'FFF',score: 65},
              {id: 7,name: 'GGG',score: 23},
              {id: 8,name: 'HHH',score: 100},
              {id: 9,name: 'III',score: 99},
              {id: 10,name: 'JJJ',score: 54},
              {id: 11,name: 'KKK',score: 76},
              {id: 12,name: 'LLL',score: 79},
              {id: 13,name: 'MMM',score: 65},
              {id: 14,name: 'NNN',score: 23},
              {id: 111,name: 'AAA',score: 100},
              {id: 2222,name: 'BBB',score: 99},
              {id: 3333,name: 'CCC',score: 54},
              {id: 4444,name: 'DDD',score: 76},
              {id: 5555,name: 'EEE',score: 79},
              {id: 6666,name: 'FFF',score: 65},
              {id: 7777,name: 'GGG',score: 23},
              {id: 88888,name: 'HHH',score: 100},
              {id: 943,name: 'III',score: 99},
              {id: 1023,name: 'JJJ',score: 54},
              {id: 121,name: 'KKK',score: 76},
              {id: 122,name: 'LLL',score: 79},
              {id: 153,name: 'MMM',score: 65},
          ]
      }
  },
  methods: {
      abc() {
          this.loading = true;
          setTimeout(() => {
              this.dataSource = this.dataSource.sort((a,b) => a.score - b.score);
          this.loading = false;
          },3000)
      }
  }
   
}
</script>
 
<style scoped lang = "scss">
    .content{
        padding: 30px;
    }
</style>