const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPanel from '../src/tabs-panel.vue'
Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('w-tabs',Tabs);
Vue.component('w-tabs-head',TabsHead);
Vue.component('w-tabs-body',TabsBody);
Vue.component('w-tabs-item',TabsItem);
Vue.component('w-tabs-panel',TabsPanel);

describe('TabsItem', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    it('存在.', () => {
        expect(TabsItem).to.exist;
    })
    it('接受 name 属性',() => {
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" >bbb</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        let Vmitem = document.querySelector('.tabs-item');
        expect(Vmitem.getAttribute('data-name')).to.eq('a');
    })

    it('接受 disabled 属性',() => {
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" disabled>bbb</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        let vmItem = vm.$el.querySelector('.disabled');
        expect(vmItem.classList.contains('disabled')).to.be.true;
    })
})