<template>
 <div class="">
    <Tabs :selected.sync="selecteTeb">
        <TabsHead class="frank">
              <template slot="actions">
                    <Button icon="settings">设置</Button>
             </template>
             <TabsItem name="h"><Icon name="like"></Icon>One</TabsItem>
             <TabsItem name="c" disabled>Two</TabsItem>
             <TabsItem name="j">Three<Icon name="download"></Icon></TabsItem>
             <TabsItem name="v">Four</TabsItem>
         </TabsHead>
         <TabsBody>
             <TabsPanel name="h">One</TabsPanel>
             <TabsPanel name="c">Two</TabsPanel>
             <TabsPanel name="j">Three</TabsPanel>
             <TabsPanel name="v">Four</TabsPanel>
         </TabsBody>
    </Tabs>
 </div>
</template>
 
<script>
import Tabs from '../../../src/tabs/tabs'
import TabsHead from '../../../src/tabs/tabs-head'
import TabsBody from '../../../src/tabs/tabs-body'
import TabsItem from '../../../src/tabs/tabs-item'
import TabsPanel from '../../../src/tabs/tabs-panel'
import Button from '../../../src/button/button'
import Icon from '../../../src/icon'
export default {
    components:{
        Tabs,TabsHead,TabsBody,TabsItem,TabsPanel,Button,Icon
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