import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'
import { expect } from 'chai';
Vue.component('w-button',Button);
Vue.component('w-icon',Icon);
Vue.component('w-button-group',buttonGroup);

new Vue({
    el: '#app'
})

import Chai from 'chai'
//单元测试
{
    const Constructor = Vue.extend(Button);
    console.log(Constructor)
    const button = new Constructor({
        propsData:{
            icon: 'settings'
        }
    });
    button.$mount('#test');
    let useElement = button.$el.querySelector('use');
    Chai.expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')  
    
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    console.log(Constructor)
    const button = new Constructor({
        propsData:{
            icon: 'settings'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    Chai.expect(order).to.eq("1");
}