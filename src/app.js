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

import Chai from 'chai'
//单元测试
{
    //测试按钮含有 icon
    const div = document.createElement('div');
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    });
    vm.$mount(div);
    let useElement = vm.$el.querySelector('use');
    Chai.expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')  
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    Chai.expect(order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    Chai.expect(order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
}