// import Vue from 'vue'
// import Button from './button'
// import Icon from './icon'
// import ButtonGroup from './button-group'
// import Row from './row'
// import Col from './col'
// import Toast from './toast'
// import plugin from './plugin'
// import Tabs from './tabs'
// import TabsHead from './tabs-head'
// import TabsBody from './tabs-body'
// import TabsItem from './tabs-item'
// import TabsPanel from './tabs-panel'
// import Collapse from './collapse'
// import CollapseItem from './collapse-item'
// import Cascader from './cascader'


// Vue.component('w-button',Button);
// Vue.component('w-icon',Icon);
// Vue.component('w-button-group',ButtonGroup);
// Vue.component('w-row',Row);
// Vue.component('w-col',Col);
// Vue.component('w-toast',Toast);
// Vue.component('w-tabs',Tabs)
// Vue.component('w-tabs-head',TabsHead)
// Vue.component('w-tabs-body',TabsBody)
// Vue.component('w-tabs-item',TabsItem)
// Vue.component('w-tabs-panel',TabsPanel)
// Vue.component('w-collapse',Collapse)
// Vue.component('w-collapse-item',CollapseItem)
// Vue.component('w-cascader',Cascader)

// Vue.use(plugin);

// new Vue({
//     el: '#app',
//     data() {
//         return {
//             source: [
//                 {
//                     name: '四川',
//                     children: [
//                         {name:'成都'},
//                         {name:'内江'},
//                         {name:'雅安'},
//                     ]
//                 }
//             ],
//             selected: []
//         }
//     },
// })
import Vue from 'vue'
import Demo from './demo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
