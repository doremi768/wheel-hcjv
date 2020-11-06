import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'
Vue.component('w-button',Button);
Vue.component('w-icon',Icon);
Vue.component('w-button-group',buttonGroup);

new Vue({
    el: '#app'
})