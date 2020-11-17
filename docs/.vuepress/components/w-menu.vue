<template>
 <div class="">
    <Tabs :selected.sync="selecteTeb">
        <TabsHead class="frank">
             <TabsItem name="h">Html</TabsItem>
             <TabsItem name="c">Css</TabsItem>
             <TabsItem name="j">JavaScript</TabsItem>
             <TabsItem name="v">Vue</TabsItem>
         </TabsHead>
         <TabsBody>
             <TabsPanel name="h">Html</TabsPanel>
             <TabsPanel name="c">Css</TabsPanel>
             <TabsPanel name="j">JavaScript</TabsPanel>
             <TabsPanel name="v">Vue</TabsPanel>
         </TabsBody>
    </Tabs>
 </div>
</template>
 
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPanel from '../../../src/tabs-panel'

export default {
    components:{
        Tabs,TabsHead,TabsBody,TabsItem,TabsPanel
    },
    data() {
        return {
            selecteTeb: 'h'
        }
    },
}
</script>
 
<style scoped lang = "scss">
 
</style>