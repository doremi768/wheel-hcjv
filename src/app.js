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
        showToast1(){
            this.$toast(`sdffd，，，${parseInt(Math.random() * 100)}`,{
                position: 'top',
                closeButton: {
                    text: '关闭'
                }
            });
        },
        showToast2(){
            this.$toast(`sdffd，，，${parseInt(Math.random() * 100)}`,{
                position: 'middle',
                closeButton: {
                    text: '关闭'
                }
            });
        },
        showToast3(){
            this.$toast(`sdffd，，，${parseInt(Math.random() * 100)}`,{
                position: 'bottom',
                closeButton: {
                    text: '关闭'
                }
            });
        },
        showToast4(){
            this.$toast(`sdffd，，，${parseInt(Math.random() * 100)}`,{
                position: 'middle',
            });
        }
    }
})
