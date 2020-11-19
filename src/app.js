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
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'


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
Vue.component('w-collapse',Collapse)
Vue.component('w-collapse-item',CollapseItem)
Vue.component('w-cascader',Cascader)

Vue.use(plugin);

new Vue({
    el: '#app',
    data() {
        return {
            source: [
                {
                name: '四川',
                children: [
                    {name: '成都',
                    children: [
                        {name: '锦江区'},
                        {name: '武侯区'},
                        {name: '高新区'},
                    ]},
                    {name: '内江',
                    children: [
                        {name: '内江1区'},
                        {name: '内江2区'},
                        {name: '内江3区'},
                    ]},
                    {name: '雅安',
                    children: [
                        {name: '雅安1区'},
                        {name: '雅安2区'},
                        {name: '雅安3区'},
                    ]},
                ]
            },
            {
                name: '浙江',
                children: [
                    {name: '杭州',
                    children: [
                        {name: '上城区'},
                        {name: '下城区'},
                        {name: '江干区'},
                    ]},
                    {name: '嘉兴',
                    children: [
                        {name: '南湖'},
                        {name: '秀洲'},
                        {name: '嘉善'},
                    ]},
                    {name: '湖州',
                    children: [
                        {name: '鼓楼'},
                        {name: '台江'},
                        {name: '仓山'},
                    ]},
                ]
            },
            {
                name: '安徽',
                children: [
                    {
                        name: '合肥',
                        children: [
                            {name: '瑶海'},
                            {name: '麓湖'}
                        ]
                    },
                    {name: '芜湖'}
                ]
            }
        ]
        }
    },
    methods: {
        
    },
})
