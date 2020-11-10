import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Row from './row.vue'
import Col from './col.vue'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.component('w-button',Button);
Vue.component('w-icon',Icon);
Vue.component('w-button-group',ButtonGroup);
Vue.component('w-row',Row);
Vue.component('w-col',Col);
Vue.component('w-toast',Toast);
Vue.use(plugin);

new Vue({
    el: '#app',
    methods: {
        showToast(){
            this.$toast('aaaaa');
        }
    }
})
