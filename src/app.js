import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPanel from './tabs-panel'
import Popover from './popover'
Vue.component('w-button',Button);
Vue.component('w-icon',Icon);
Vue.component('w-button-group',ButtonGroup);
Vue.component('w-row',Row);
Vue.component('w-col',Col);
Vue.component('w-toast',Toast);
Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-panel',TabsPanel)
Vue.component('w-popover',Popover)

Vue.use(plugin);

new Vue({
    el: '#app',
    data() {
        return {
            selecteTeb: 'a'
        }
    },
    methods: {
        showToast(){
            this.$toast('abcdefgijk',{
                closeButton: {
                    text: '关闭'
                }
            })
        }
    },
})
