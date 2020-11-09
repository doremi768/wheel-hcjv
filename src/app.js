import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Row from './row.vue'
import Col from './col.vue'


Vue.component('w-button',Button);
Vue.component('w-icon',Icon);
Vue.component('w-button-group',ButtonGroup);
Vue.component('w-row',Row);
Vue.component('w-col',Col);


new Vue({
    el: '#app'
})
