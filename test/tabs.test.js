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

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist;
    })
    
    it('接受 selected 属性',(done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" >bbb</w-tabs-item>
                <w-tabs-item name="b">ccc</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
                <w-tabs-panel name="b">ccc111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item:nth-child(1)`);
            expect(x.classList.contains('active')).to.eq(true);
            done();
        })
    })
})